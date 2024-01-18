"""Here we define all plotly-related interactions such as generating charts from json input."""

#Mustafa Onur Cay - 19/10/2023
from typing import Any
import os
import json
import plotly.graph_objs as go
from plotly.subplots import make_subplots
import plotly.io as pio
import pandas as pd

def generate_plot_html(config_json, data_json):

    fig = go.Figure()
    for trace in config_json["traces"]:
        plot_type = trace["plotType"]
        plot_indicator = trace["plotIndicator"]

        df = data_extract(data_json,plot_indicator,"value")

        if plot_type=="Bar":
            fig.add_trace(go.Bar(x=df['x'],y=df['y']))
        elif plot_type=="Scatter":
            fig.add_trace(go.Scatter(x=df['x'],y=df['y']))
        elif plot_type=="Line":
            fig.add_trace(go.Line(x=df['x'],y=df['y']))
        

    fig_html = fig.to_html()
    return fig_html


def data_extract(data_json:dict[str,Any],name:str,first_value:str) -> pd.DataFrame:
    """
    Extracts the data from json format to a numpy DataFrame.
    :param data_json: The Json file that data is to be extracted from.
    :param name: Name of the data field to be put in a DF.
    :param first_value: If a value in the data json is specified this \
    will be the y axis of the graph.
    :returns: a Pandas Data Frame
    """

    data_dict = {"x":[],"y":[]}
    monthly_data = data_json["month"]
    graph_name_split = name.split('/')
    level1 = graph_name_split[1]
    named_data = monthly_data[level1]
    if len(graph_name_split)== 3:
        level2 = graph_name_split[2]
        named_data = named_data[level2]

    for entry in named_data:
        first_key = list(entry.keys())[0]

        data_dict["x"].append(entry[first_key])
        try:
            data_dict["y"].append(entry[first_value])
        except KeyError:
            data_dict["y"].append(None)
    df = pd.DataFrame(data_dict)
    return df