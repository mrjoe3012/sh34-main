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
        orientation = trace["orientation"]
        trace_name = trace["name"]

        # Generating the dataframe based on the plot_indicator field. NB - still no idea what the 3rd parameter is for.
        df = data_extract(data_json,plot_indicator,"value")

        # In order to swap plot orientations, you must swap x and y datasets
        if orientation == "h":
            xData = df["y"]
            yData = df["x"]
        elif orientation == "v":
            xData = df["x"]
            yData = df["y"]

        # Adding the appropriate trace
        if plot_type=="Bar":
            fig.add_trace(go.Bar(x=xData,y=yData,orientation=orientation,name=trace_name))
        elif plot_type=="Scatter":
            fig.add_trace(go.Scatter(x=xData,y=yData,orientation=orientation,mode='markers',name=trace_name))
        elif plot_type=="Line":
            fig.add_trace(go.Line(x=xData,y=yData,orientation=orientation,name=trace_name))




    # Update the figure with initial font settings - these act as default font settings that then get overridden if any other font options are specified
    fig = update_xaxis(fig, properties)
    fig = update_yaxis(fig, properties)
    fig = update_plot_colours(fig, properties)
    fig = update_grid_lines(fig, properties)
    fig = update_title(fig, properties)
    fig = update_xaxis_ticklabels(fig, properties)
    fig = update_yaxis_ticklabels(fig, properties)
    fig = update_plotsize(fig, properties)

    fig_html = fig.to_html()
    return fig_html


def update_title(fig, properties):

    if properties["title_style_mode"] == "default":
        fig.update_layout(
            title={
                'text': properties["plot_title"],
                'font': {
                    'family': properties["title_typeface_default"], 
                    'size': properties["title_size_default"],                    
                    'color': properties["title_colour_default"]     
                }
            }
        )
    elif properties["title_style_mode"] == "custom":
        fig.update_layout(
            title={
                'text': properties["plot_title"],
                'font': {
                    'family': properties["title_typeface_custom"], 
                    'size': properties["title_size_custom"],                    
                    'color': properties["title_colour_custom"]     
                }
            }
        )

    return fig


def update_xaxis(fig, properties):

    if properties["xaxis_style_mode"] == "default":
        fig.update_xaxes(
            title_text=properties["xaxis_text"],
            title_font=dict(
                size=properties["xaxis_size_default"],
                color=properties["xaxis_colour_default"], 
                family=properties["xaxis_typeface_default"] 
            )
        )
    elif properties["xaxis_style_mode"] == "custom":
        fig.update_xaxes(
            title_text=properties["xaxis_text"],
            title_font=dict(
                size=properties["xaxis_size_custom"],
                color=properties["xaxis_colour_custom"], 
                family=properties["xaxis_typeface_custom"] 
            )
        )

    return fig


def update_yaxis(fig, properties):

    if properties["yaxis_style_mode"] == "default":
        fig.update_yaxes(
            title_text=properties["yaxis_text"],
            title_font=dict(
                size=properties["yaxis_size_default"],
                color=properties["yaxis_colour_default"], 
                family=properties["yaxis_typeface_default"] 
            )
        )
    elif properties["yaxis_style_mode"] == "custom":
        fig.update_yaxes(
            title_text=properties["yaxis_text"],
            title_font=dict(
                size=properties["yaxis_size_custom"],
                color=properties["yaxis_colour_custom"], 
                family=properties["yaxis_typeface_custom"] 
            )
        )

    return fig


def update_plotsize(fig, properties):
    fig.update_layout(width=int(properties["plot_width"]), height=int(properties["plot_height"]))

    return fig


def update_plot_colours(fig, properties):

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


def update_xaxis_ticklabels(fig, properties):

    fig.update_layout(
            xaxis=dict(
            tickangle=properties["xaxis_ticks_angle"],
            side=properties["xaxis_ticks_position"]
        )
    )

    if properties["xaxis_ticks_style_mode"] == "default":
        fig.update_layout(
            xaxis=dict(
                tickfont=dict(
                    family=properties["xaxis_ticks_typeface_default"],
                    size=properties["xaxis_ticks_size_default"],                          
                    color=properties["xaxis_ticks_colour_default"]                   
                )
            )
        )
    elif properties["xaxis_ticks_style_mode"] == "custom":
        fig.update_layout(
            xaxis=dict(
                tickfont=dict(
                    family=properties["xaxis_ticks_typeface_custom"],
                    size=properties["xaxis_ticks_size_custom"],                          
                    color=properties["xaxis_ticks_colour_custom"]                   
                )
            )
        )

    return fig


def update_yaxis_ticklabels(fig, properties):
    fig.update_layout(
            yaxis=dict(
            tickangle=properties["yaxis_ticks_angle"],
            side=properties["yaxis_ticks_position"]
        )
    )

    if properties["yaxis_ticks_style_mode"] == "default":
        fig.update_layout(
            yaxis=dict(
                tickfont=dict(
                    family=properties["yaxis_ticks_typeface_default"],
                    size=properties["yaxis_ticks_size_default"],                          
                    color=properties["yaxis_ticks_colour_default"]                   
                )
            )
        )
    elif properties["yaxis_ticks_style_mode"] == "custom":
        fig.update_layout(
            yaxis=dict(
                tickfont=dict(
                    family=properties["yaxis_ticks_typeface_custom"],
                    size=properties["yaxis_ticks_size_custom"],                          
                    color=properties["yaxis_ticks_colour_custom"]                   
                )
            )
        )

    return fig
    
    
def build_property_dict(config_json):
    dict = {}

    # General Plot Options
    dict["plot_width"] = config_json["generalOptions"]["plotWidth"]
    dict["plot_height"] = config_json["generalOptions"]["plotHeight"]
    dict["display_xaxis_gridlines"] = config_json["generalOptions"]["displayXAxisLines"]
    dict["display_yaxis_gridlines"] = config_json["generalOptions"]["displayYAxisLines"]
    dict["xaxis_scale"] = config_json["generalOptions"]["xAxisScale"]
    dict["yaxis_scale"] = config_json["generalOptions"]["yAxisScale"]



    # Labelling Options - Title
    dict["plot_title"] = config_json["labellingOptions"]["title"]["plotTitle"]
    dict["title_style_mode"] = config_json["labellingOptions"]["title"]["styling"]["currentStylingMode"]
        # Default Title Styling
    dict["title_colour_default"] = config_json["labellingOptions"]["title"]["styling"]["defaultFontStyle"]["fontColour"]
    dict["title_size_default"] = config_json["labellingOptions"]["title"]["styling"]["defaultFontStyle"]["fontSize"]
    dict["title_typeface_default"] = config_json["labellingOptions"]["title"]["styling"]["defaultFontStyle"]["typeface"]
            # Custom Title Styling
    dict["title_colour_custom"] = config_json["labellingOptions"]["title"]["styling"]["customFontStyle"]["fontColour"]
    dict["title_size_custom"] = config_json["labellingOptions"]["title"]["styling"]["customFontStyle"]["fontSize"]
    dict["title_typeface_custom"] = config_json["labellingOptions"]["title"]["styling"]["customFontStyle"]["typeface"]



    # Labelling Options - XAxis
    dict["xaxis_text"] = config_json["labellingOptions"]["xAxis"]["xAxisText"]
    dict["xaxis_style_mode"] = config_json["labellingOptions"]["xAxis"]["styling"]["currentStylingMode"]
        # Default X-Axis Styling
    dict["xaxis_colour_default"] = config_json["labellingOptions"]["xAxis"]["styling"]["defaultFontStyle"]["fontColour"]
    dict["xaxis_size_default"] = config_json["labellingOptions"]["xAxis"]["styling"]["defaultFontStyle"]["fontSize"]
    dict["xaxis_typeface_default"] = config_json["labellingOptions"]["xAxis"]["styling"]["defaultFontStyle"]["typeface"]
        # Custom X-Axis Styling
    dict["xaxis_colour_custom"] = config_json["labellingOptions"]["xAxis"]["styling"]["customFontStyle"]["fontColour"]
    dict["xaxis_size_custom"] = config_json["labellingOptions"]["xAxis"]["styling"]["customFontStyle"]["fontSize"]
    dict["xaxis_typeface_custom"] = config_json["labellingOptions"]["xAxis"]["styling"]["customFontStyle"]["typeface"]



    # Labelling Optios - XAxis Ticks
    dict["xaxis_ticks_angle"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["tickAngle"]
    dict["xaxis_ticks_position"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["tickPosition"]
    dict["xaxis_ticks_style_mode"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["currentStylingMode"]
        # Default X-Axis Tick Label Styling
    dict["xaxis_ticks_colour_default"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontColour"]
    dict["xaxis_ticks_size_default"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontSize"]
    dict["xaxis_ticks_typeface_default"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["typeface"]
        # Custom X-Axis Tick Label Styling
    dict["xaxis_ticks_colour_custom"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontColour"]
    dict["xaxis_ticks_size_custom"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontSize"]
    dict["xaxis_ticks_typeface_custom"] = config_json["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["typeface"]



    # Labelling Options - YAxis
    dict["yaxis_text"] = config_json["labellingOptions"]["yAxis"]["yAxisText"]
    dict["yaxis_style_mode"] = config_json["labellingOptions"]["yAxis"]["styling"]["currentStylingMode"]
        # Default Y-Axis Styling
    dict["yaxis_colour_default"] = config_json["labellingOptions"]["yAxis"]["styling"]["defaultFontStyle"]["fontColour"]
    dict["yaxis_size_default"] = config_json["labellingOptions"]["yAxis"]["styling"]["defaultFontStyle"]["fontSize"]
    dict["yaxis_typeface_default"] = config_json["labellingOptions"]["yAxis"]["styling"]["defaultFontStyle"]["typeface"]
        # Custom Y-Axis Styling
    dict["yaxis_colour_custom"] = config_json["labellingOptions"]["yAxis"]["styling"]["customFontStyle"]["fontColour"]
    dict["yaxis_size_custom"] = config_json["labellingOptions"]["yAxis"]["styling"]["customFontStyle"]["fontSize"]
    dict["yaxis_typeface_custom"] = config_json["labellingOptions"]["yAxis"]["styling"]["customFontStyle"]["typeface"]



    # Labelling Optios - YAxis Ticks
    dict["yaxis_ticks_angle"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["tickAngle"]
    dict["yaxis_ticks_position"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["tickPosition"]
    dict["yaxis_ticks_style_mode"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["styling"]["currentStylingMode"]
        # Default Y-Axis Tick Label Styling
    dict["yaxis_ticks_colour_default"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontColour"]
    dict["yaxis_ticks_size_default"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontSize"]
    dict["yaxis_ticks_typeface_default"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["styling"]["customFontStyle"]["typeface"]
        # Custom Y-Axis Tick Label Styling
    dict["yaxis_ticks_colour_custom"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontColour"]
    dict["yaxis_ticks_size_custom"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontSize"]
    dict["yaxis_ticks_typeface_custom"] = config_json["labellingOptions"]["yAxis"]["tickLabels"]["styling"]["customFontStyle"]["typeface"]


    # Visual Options - Colour
    dict["plot_background_colour"] = config_json["visualOptions"]["colour"]["plotBackgroundColourHex"]
    dict["plot_margin_colour"] = config_json["visualOptions"]["colour"]["plotMarginColourHex"]

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