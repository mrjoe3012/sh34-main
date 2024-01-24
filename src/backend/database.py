import pymongo, os
from typing import Any

DB_NAME = "SH34_DB"
TEMPLATE_COLLECTION_NAME = "Templates_Data"
PLOT_COLLECTION_NAME = "Plots_Data"

def get_connection_string() -> str:
    """
    Gets the connection string from 'SH34_DB' environment
    variable.
    :returns: The connection string.
    """
    env_name = "SH34_DB"
    if env_name not in os.environ:
        raise RuntimeError("Error. Please set the 'SH34_DB' environment" \
            + " variable to the database connection string.")
    return os.environ['SH34_DB'] 

def get_client() -> pymongo.MongoClient:
    """
    Return a pymongo.MongoClient using the connection string.
    :returns: The pymongo.MongoClient
    """
    client = pymongo.MongoClient(get_connection_string())
    return client

def load_collection(name: str, filter: dict[str, Any]) -> list[dict[str, Any]]:
    """
    Load an entire collection from the database.
    :param name: The name of the collection.
    :param filter: The filter to apply.
    :returns: The elements within the collection.
    """
    client = get_client()
    database = client[DB_NAME]
    collection = database[name]
    result = list(collection.find(filter))
    client.close()
    return result

def load_templates(filter: dict[str, Any] = {}) -> list[dict[str, Any]]:
    """
    Load templates and apply a filter.
    :param filter: The filter to apply.
    :returns: The templates matching the filter.
    """
    templates = load_collection(
        TEMPLATE_COLLECTION_NAME,
        filter
    )
    return templates

def load_plots(filter: dict[str, Any] = {}) -> list[dict[str, Any]]:
    """
    Load plots and apply a filter.
    :param filter: The filter to apply.
    :returns: The plots matching the filter.
    """
    plots = load_collection(
        PLOT_COLLECTION_NAME,
        filter
    )
    return plots

def load_plots_from_template(template: dict[str, Any]) -> list[dict[str, Any]]:
    """
    Load plots associated with a template.
    :param template: The template whose plots should
    be fetched.
    :returns: A list of plots associated with the template.
    """
    plot_ids = template['PlotArray']
    plots = load_plots({'_id' : {'$in': plot_ids}})
    return plots
    
def load_template_from_plot(plot: dict[str, Any]) -> dict[str, Any]:
    """
    Load the template associated with a plot.
    :param: The plot object whose template
    to fetch.
    :returns: The template associated with the
    plot object.
    """
    plot_id = plot['_id']
    filter = {
        'PlotArray' : {
            '$elemMatch' : { '$eq' : plot_id }
        }
    }
    template = load_templates(filter)[0]
    return template
