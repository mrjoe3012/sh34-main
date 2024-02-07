"""This is the Database-Backend connection estabilishment"""
import os
from typing import Any, Optional
import pymongo


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

def load_collection(name: str, filters: dict[str, Any]) -> list[dict[str, Any]]:
    """
    Load an entire collection from the database.
    :param name: The name of the collection.
    :param filters: The filters to apply.
    :returns: The elements within the collection.
    """
    client = get_client()
    database = client[DB_NAME]
    collection = database[name]
    result = list(collection.find(filters))
    client.close()
    return result

def load_templates(filters: Optional[dict[str, Any]] = None) -> list[dict[str, Any]]:
    """
    Load templates and apply a filters.
    :param filters: The filters to apply.
    :returns: The templates matching the filters.
    """
    if filters is None:
        filters = {}

    templates = load_collection(
        TEMPLATE_COLLECTION_NAME,
        filters
    )
    return templates

def load_plots(filters: Optional[dict[str, Any]] = None) -> list[dict[str, Any]]:
    """
    Load plots and apply a filters.
    :param filters: The filters to apply.
    :returns: The plots matching the filters.
    """
    if filters is None:
        filters = {}
    plots = load_collection(
        PLOT_COLLECTION_NAME,
        filters
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
    filters = {
        'PlotArray' : {
            '$elemMatch' : { '$eq' : plot_id }
        }
    }
    template = load_templates(filters)[0]
    return template
