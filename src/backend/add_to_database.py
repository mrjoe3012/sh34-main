"""
Modules for adding/modifying database
entries with new templates and plots.
"""
from datetime import datetime
from typing import Any
from .database import (
    get_client, load_collection,
    load_plots_from_template, load_templates,
    PLOT_COLLECTION_NAME, TEMPLATE_COLLECTION_NAME
)
def connect_to_database():
    """
    Connect to database.
    """
    client = get_client()
    db = client['SH34_DB']
    return db

def get_new_id(collection):
    """
    Given a collection, return the id that the next element added to the collection should have
    """
    collection_data = load_collection(collection, {})
    if len(collection_data) > 0:
        last_id = max(data['_id'] for data in collection_data)
        return last_id + 1
    return 1

def get_next_order(template: dict[str, Any]) -> int:
    """
    Given a template id, figure out how many templates it has
    and return the ordering of a newly added plot.

    :param template: The template's id.
    :returns: The next ordering value.
    """
    plots = load_plots_from_template(template)
    if len(plots) > 0:
        return max(plot['order'] for plot in plots) + 1
    return 1

def add_template(name, description, tags):
    """
    Add a template to the database
    """
    db = connect_to_database()
    collection = "Templates_Data"
    current_date_time = datetime.now()
    dt_string = current_date_time.strftime("%d/%m/%Y")
    print("Adding template")

    document = {"_id": get_new_id(collection), # Increment of last elements ID
                "PlotArray": [], #Initially has 0 Plots
                "Name": name,
                "Description": description,
                "Tags": tags,
                "LastModified": dt_string,
                "DateCreated": dt_string
                }

    result = db[collection].insert_one(document)
    print(f"Inserted document id: {result.inserted_id}")
    return document

def add_plot(template_id: str, config_file: dict[str, Any]) -> dict[str, Any]:
    """
    Add a plot to the database
    
    :param template_id: The template it's being added to.
    :param config_file: The plot's configuration.
    :returns: The added plot.
    """
    next_id = get_new_id(PLOT_COLLECTION_NAME)
    template = load_templates({'_id' : template_id})[0]
    order = get_next_order(template)

    document = {"_id": next_id,
                "config_file": config_file, 
                "order": order
                }

    db = connect_to_database()
    collection = db[PLOT_COLLECTION_NAME]
    collection.insert_one(document)
    collection = db[TEMPLATE_COLLECTION_NAME]
    template['PlotArray'].append(next_id)
    collection.update_one({'_id' : template_id}, {"$set" : template})
    return document
