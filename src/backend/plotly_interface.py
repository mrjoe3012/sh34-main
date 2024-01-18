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

    # Generate a Dictionary of Properties from config_json
    properties = build_property_dict(config_json)

    # Create the Figure, plotting the data for each trace.
    fig = go.Figure()
    for trace in config_json["traces"]:
        plot_type = trace["plotType"]
        plot_indicator = trace["plotIndicator"]

        # Generating the dataframe based on the plot_indicator field. NB - still no idea what the 3rd parameter is for.
        df = data_extract(data_json,plot_indicator,"value")

        # Adding the appropriate trace
        if plot_type=="Bar":
            fig.add_trace(go.Bar(x=df['x'],y=df['y']))
        elif plot_type=="Scatter":
            fig.add_trace(go.Scatter(x=df['x'],y=df['y']))
        elif plot_type=="Line":
            fig.add_trace(go.Line(x=df['x'],y=df['y']))

    
    fig.update_layout(
        title=dict(
            text=properties["plot_title"]
        )
    )

    # Update the figure with initial font settings - these act as default font settings that then get overridden if any other font options are specified
    fig = update_default_font_options(fig, properties)
    fig = update_xaxis(fig, properties)
    fig = update_yaxis(fig, properties)
    fig = update_plot_colours(fig, properties)
    fig = update_grid_lines(fig, properties)

    fig_html = fig.to_html()
    return fig_html



def update_default_font_options(fig, properties):
    
    # Defining appropriate values for options when those options are blank in the configJSON
    default_properties = {
        "default_font_colour": "#000000",
        "default_font_size": 12,
        "default_font_typeface": "Arial, sans-serif"
    }

    # If the Options in the properties dictionary are blank, replace them with the specified default options.
    for key, default in default_properties.items():
        if not properties.get(key):
            properties[key] = default

    fig.update_layout(
        font=dict(
            size=properties["default_font_size"],
            family=properties["default_font_typeface"],
            color=properties["default_font_colour"]
        )
    )
    return fig


def update_xaxis(fig, properties):

    # Defining appropriate replacements for xaxis options if they are left blank
    default_properties = {
        "xaxis_text": "X Axis",
        "xaxis_colour": properties["default_font_colour"],
        "xaxis_fontsize": properties["default_font_size"],
        "xaxis_typeface": properties["default_font_typeface"]
    }

    # If the Options in the properties dictionary are blank, replace them with the specified default options.
    for key, default in default_properties.items():
        if not properties.get(key):
            properties[key] = default


    fig.update_xaxes(
        title_text=properties["xaxis_text"],
        title_font=dict(
            size=properties["xaxis_fontsize"],
            color=properties["xaxis_colour"], 
            family=properties["xaxis_typeface"] 
        )
    )

    return fig


def update_yaxis(fig, properties):

    # Defining appropriate replacements for xaxis options if they are left blank
    default_properties = {
        "yaxis_text": "Y Axis",
        "yaxis_colour": properties["default_font_colour"],
        "yaxis_fontsize": properties["default_font_size"],
        "yaxis_typeface": properties["default_font_typeface"]
    }

    # If the Options in the properties dictionary are blank, replace them with the specified default options.
    for key, default in default_properties.items():
        if not properties.get(key):
            properties[key] = default


    fig.update_yaxes(
        title_text=properties["yaxis_text"],
        title_font=dict(
            size=properties["yaxis_fontsize"],
            color=properties["yaxis_colour"], 
            family=properties["yaxis_typeface"] 
        )
    )

    return fig


def update_plot_colours(fig, properties):

    # Defining appropriate replacements for xaxis options if they are left blank
    default_properties = {
        "plot_background_colour": "#e5ecf6",
        "plot_margin_colour": "#FFFFFF"
    }

    # If the Options in the properties dictionary are blank, replace them with the specified default options.
    for key, default in default_properties.items():
        if not properties.get(key):
            properties[key] = default

    fig.update_layout(
        plot_bgcolor = properties["plot_background_colour"],
        paper_bgcolor = properties["plot_margin_colour"]
    )

    return fig


def update_grid_lines(fig, properties):
    # Defining appropriate replacements for xaxis options if they are left blank
    default_properties = {
        "display_xaxis_gridlines": False,
        "display_yaxis_gridlines": True
    }

    # If the Options in the properties dictionary are blank, replace them with the specified default options.
    for key, default in default_properties.items():
        if not properties.get(key):
            properties[key] = default

    fig.update_layout(
        xaxis=dict(showgrid= properties["display_xaxis_gridlines"]), 
        yaxis=dict(showgrid= properties["display_yaxis_gridlines"])
    )

    return fig



def build_property_dict(config_json):
    dict = {}
    dict["plot_title"] = config_json["plotTitle"]

    # General Plot Options
    dict["plot_width"] = config_json["generalOptions"]["plotWidth"]
    dict["plot_height"] = config_json["generalOptions"]["plotHeight"]
    dict["display_xaxis_gridlines"] = config_json["generalOptions"]["displayXAxisLines"]
    dict["display_yaxis_gridlines"] = config_json["generalOptions"]["displayYAxisLines"]
    dict["orientation"] = config_json["generalOptions"]["orientation"]
    dict["xaxis_scale"] = config_json["generalOptions"]["xAxisScale"]
    dict["yaxis_scale"] = config_json["generalOptions"]["yAxisScale"]

    # Labelling Options - Title
    dict["title_colour"] = config_json["labellingOptions"]["title"]["titleFontColourHex"]
    dict["title_size"] = config_json["labellingOptions"]["title"]["titleFontSize"]
    dict["title_typeface"] = config_json["labellingOptions"]["title"]["titleTypeface"]

    # Labelling Options - XAxis
    dict["xaxis_text"] = config_json["labellingOptions"]["xAxis"]["xAxisText"]
    dict["xaxis_colour"] = config_json["labellingOptions"]["xAxis"]["xAxisFontColourHex"]
    dict["xaxis_size"] = config_json["labellingOptions"]["xAxis"]["xAxisFontSize"]
    dict["xaxis_typeface"] = config_json["labellingOptions"]["xAxis"]["xAxisTypeface"]
    dict["xaxis_ticks_colour"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["tickFontColourHex"]
    dict["xaxis_ticks_size"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["tickFontSize"]
    dict["xaxis_ticks_typeface"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["tickTypeface"]
    dict["xaxis_ticks_angle"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["tickAngle"]
    dict["xaxis_ticks_colour"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["tickPosition"]

    # Labelling Options - YAxis
    dict["yaxis_text"] = config_json["labellingOptions"]["yAxis"]["yAxisText"]
    dict["yaxis_colour"] = config_json["labellingOptions"]["yAxis"]["yAxisFontColourHex"]
    dict["yaxis_size"] = config_json["labellingOptions"]["yAxis"]["yAxisFontSize"]
    dict["yaxis_typeface"] = config_json["labellingOptions"]["yAxis"]["yAxisTypeface"]
    dict["yaxis_ticks_colour"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["tickFontColourHex"]
    dict["yaxis_ticks_size"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["tickFontSize"]
    dict["yaxis_ticks_typeface"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["tickTypeface"]
    dict["yaxis_ticks_angle"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["tickAngle"]
    dict["yaxis_ticks_colour"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["tickPosition"]

    # Visual Options - Colour
    dict["plot_background_colour"] = config_json["visualOptions"]["colour"]["plotBackgroundColourHex"]
    dict["plot_margin_colour"] = config_json["visualOptions"]["colour"]["plotMarginColourHex"]

    # Visual Options - Text
    dict["default_font_colour"] = config_json["visualOptions"]["text"]["defaultFontColourHex"]
    dict["default_font_size"] = config_json["visualOptions"]["text"]["defaultFontSize"]
    dict["default_font_typeface"] = config_json["visualOptions"]["text"]["defaultTypeface"]

    return dict



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