from datetime import datetime
from .database import get_client, load_collection

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
    print("hello World")
    collection_data = load_collection(collection, {})
    last_id = collection_data[-1]['_id']
    return last_id + 1

def add_template(name, description, tags):
    """
    Add a template to the database
    """
    db = connect_to_database()
    collection = "Templates_Data"
    current_date_time = datetime.now()
    dt_string = current_date_time.strftime("%d/%m/%Y")
    print(dt_string)

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

def add_plot():
    """
    Add a plot to the database
    """
    db = connect_to_database()
    collection = db["Plots_Data"]

    document = {"_id": get_new_id(db,collection), #Increment of last elements ID
                "config_file": "", #Include Name and Graph Type. 
                "order": "" #Increment of last plot's order within this plots template
                }

    result = collection.insert_one(document)
    print(f"Inserted document id: {result.inserted_id}")
