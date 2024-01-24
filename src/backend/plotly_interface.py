"""Here we define all plotly-related interactions such as generating charts from json input."""

#Mustafa Onur Cay - 19/10/2023
from typing import Any
import plotly.graph_objs as go
import pandas as pd

def generate_plot_html(config_json, data_json):
    """ Takes in the config_json received from the frontend,
        creates the plotly figure and returns its HTML form
    """

    # Generate a Dictionary of Properties from config_json
    properties = build_property_dict(config_json)

    fig = go.Figure()
    
    fig = update_traces(fig, properties, data_json)
    fig = update_xaxis(fig, properties)
    fig = update_yaxis(fig, properties)
    fig = update_plot_colours(fig, properties)
    fig = update_grid_lines(fig, properties)
    fig = update_title(fig, properties)
    fig = update_xaxis_ticklabels(fig, properties)
    fig = update_yaxis_ticklabels(fig, properties)
    fig = update_plotsize(fig, properties)
    fig = update_annotations(fig, properties)

    fig_html = fig.to_html()
    return fig_html


def update_traces(fig, properties,data_json):
    """
        Updates the figure with the specified traces from the trace array.
        Returns the updated figure after traces have been added.
    """

    # Create the Figure, plotting the data for each trace in the trace array.
    
    for trace in properties["traces"]:
        plot_type = trace["plotType"]
        plot_indicator = trace["plotIndicator"]
        trace_name = trace["name"]
        trace_marker_colour = trace["markerColour"]

        # Generating the dataframe based on the plot_indicator field.
        # NB - still no idea what the 3rd parameter is for.
        df = data_extract(data_json,plot_indicator,"value")

        x_data = df["x"]
        y_data = df["y"]


        # Adding the appropriate trace
        if plot_type=="Bar":
            fig.add_trace(go.Bar(x=x_data,
                                 y=y_data,
                                 name=trace_name,
                                 marker={"color": trace_marker_colour}))
        elif plot_type=="Scatter":
            fig.add_trace(go.Scatter(x=x_data,
                                     y=y_data,
                                     mode='markers',
                                     name=trace_name,
                                     marker={"color": trace_marker_colour}))
        elif plot_type=="Line":
            fig.add_trace(go.Line(x=x_data,
                                  y=y_data,
                                  name=trace_name,
                                  marker={"color": trace_marker_colour}))
        elif plot_type=="Pie":
            fig.add_trace(go.Pie(labels=x_data,
                                 values=y_data,
                                 name=trace_name,
                                 textinfo='label',
                                 hoverinfo='label+value'))
            fig.update_traces(domain={"x": [0.5,0.5], "y":[0.5,0.5]}, selector={"type": "pie"})

    return fig


def update_title(fig, properties):
    """
        Takes in the current figure, the properties dictionary and: 
            - Alters the figure's title using the properties dictionary.
        Returns the updated plotly figure.
    """

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
    """
        Takes in the current figure, the properties dictionary and: 
            - Alters the figure's xaxis label using the properties dictionary.
        Returns the updated plotly figure.
    """

    if properties["xaxis_style_mode"] == "default":
        fig.update_xaxes(
            title_text=properties["xaxis_text"],
            title_font = {"size": properties["xaxis_size_default"],
                          "color": properties["xaxis_colour_default"],
                          "family": properties["xaxis_typeface_default"]}
        )
    elif properties["xaxis_style_mode"] == "custom":
        fig.update_xaxes(
            title_text=properties["xaxis_text"],
            title_font = {"size": properties["xaxis_size_custom"],
                          "color": properties["xaxis_colour_custom"],
                          "family": properties["xaxis_typeface_custom"]}
        )

    return fig


def update_yaxis(fig, properties):
    """
        Takes in the current figure, the properties dictionary and: 
            - Alters the figure's yaxis label using the properties dictionary.
        Returns the updated plotly figure.
    """

    if properties["yaxis_style_mode"] == "default":
        fig.update_yaxes(
            title_text=properties["yaxis_text"],
            title_font = {"size": properties["yaxis_size_default"],
                          "color": properties["yaxis_colour_default"],
                          "family": properties["yaxis_typeface_default"]}
        )
    elif properties["yaxis_style_mode"] == "custom":
        fig.update_yaxes(
            title_text=properties["yaxis_text"],
            title_font = {"size": properties["yaxis_size_custom"],
                          "color": properties["yaxis_colour_custom"],
                          "family": properties["yaxis_typeface_custom"]}
        )

    return fig


def update_plotsize(fig, properties):
    """
        Takes in the current figure, the properties dictionary and: 
            - Alters the figure's size using the properties dictionary.
        Returns the updated plotly figure.
    """

    fig.update_layout(width=int(properties["plot_width"]),
                      height=int(properties["plot_height"]))

    return fig


def update_plot_colours(fig, properties):
    """
        Takes in the current figure, the properties dictionary and: 
            - Alters the figure's colour scheme using the properties dictionary.
        Returns the updated plotly figure.
    """

    fig.update_layout(
        plot_bgcolor = properties["plot_background_colour"],
        paper_bgcolor = properties["plot_margin_colour"]
    )

    return fig


def update_grid_lines(fig, properties):
    """
        Takes in the current figure, the properties dictionary and: 
            - Alters the figure's grid lines using the properties dictionary.
        Returns the updated plotly figure.
    """

    fig.update_layout(
        xaxis = {"showgrid": properties["display_xaxis_gridlines"]},
        yaxis = {"showgrid": properties["display_yaxis_gridlines"]}
    )

    return fig


def update_xaxis_ticklabels(fig, properties):
    """
        Takes in the current figure, the properties dictionary and: 
            - Alters the figure's xaxis tick labels using the properties dictionary.
        Returns the updated plotly figure.
    """

    fig.update_layout(
        xaxis = {"tickangle": properties["xaxis_ticks_angle"],
                 "side": properties["xaxis_ticks_position"]}
    )

    if properties["xaxis_ticks_style_mode"] == "default":
        fig.update_layout(
            xaxis={
                "tickfont": {
                    "family": properties["xaxis_ticks_typeface_default"],
                    "size": properties["xaxis_ticks_size_default"],
                    "color": properties["xaxis_ticks_colour_default"]
                }
            }
        )
    elif properties["xaxis_ticks_style_mode"] == "custom":
        fig.update_layout(
            xaxis={
                "tickfont": {
                    "family": properties["xaxis_ticks_typeface_custom"],
                    "size": properties["xaxis_ticks_size_custom"],
                    "color": properties["xaxis_ticks_colour_custom"]
                }
            }
        )

    return fig


def update_yaxis_ticklabels(fig, properties):
    """
        Takes in the current figure, the properties dictionary and: 
            - Alters the figure's yaxis tick labels using the properties dictionary.
        Returns the updated plotly figure.
    """

    fig.update_layout(
            yaxis={
                "tickangle": properties["yaxis_ticks_angle"],
                "side": properties["yaxis_ticks_position"]
            }
    )

    if properties["yaxis_ticks_style_mode"] == "default":
        fig.update_layout(
            yaxis={
                "tickfont": {
                    "family": properties["yaxis_ticks_typeface_default"],
                    "size": properties["yaxis_ticks_size_default"],
                    "color": properties["yaxis_ticks_colour_default"]
                }
            }
        )
    elif properties["yaxis_ticks_style_mode"] == "custom":
        fig.update_layout(
            yaxis={
                "tickfont": {
                    "family": properties["yaxis_ticks_typeface_custom"],
                    "size": properties["yaxis_ticks_size_custom"],
                    "color": properties["yaxis_ticks_colour_custom"]
                }
            }
        )

    return fig


def update_annotations(fig, properties):
    """
        Creates each annotation from the annotation array in the properties dictionary
    """

    for annotation in properties["annotations"]:
        fig.add_annotation(
            x=annotation["xPos"],
            y=annotation["yPos"],
            xref=annotation["xref"],
            yref=annotation["yref"],
            text=annotation["text"],
            showarrow=annotation["showArrow"],
            arrowhead=2,
            arrowsize=1,
            arrowcolor=annotation["arrowColour"],
            ax=annotation["arrowOffsetX"],
            ay=annotation["arrowOffsetY"],
            arrowwidth=annotation["arrowWidth"],
            font={
                "color": annotation["styling"]["fontColour"],
                "size": annotation["styling"]["fontSize"],
                "family": annotation["styling"]["typeface"]
            }
        )

    return fig


def build_property_dict(config_json):
    """
        Takes in the config_json JSON, and creates a dictionary of properties from
        the config_json. This property dictionary is referenced throught methods
        in this script to access the attributes from the configJSON
    """

    properties = {}

    # Traces Array
    properties.update({"traces": config_json["traces"]})

    # Annotation Array
    properties.update({"annotations": config_json["annotations"]})

    # General Plot Options
    general_options = config_json["generalOptions"]
    properties.update({
        "plot_width": general_options["plotWidth"],
        "plot_height": general_options["plotHeight"],
        "display_xaxis_gridlines": general_options["displayXAxisLines"],
        "display_yaxis_gridlines": general_options["displayYAxisLines"],
        "xaxis_scale": general_options["xAxisScale"],
        "yaxis_scale": general_options["yAxisScale"],
    })


    # Labelling Options
    labelling_options = config_json["labellingOptions"]


    # Title
    title_options = labelling_options["title"]
    title_styling = title_options["styling"]
    properties.update({
        "plot_title": title_options["plotTitle"],
        "title_style_mode": title_styling["currentStylingMode"],
        # Default Title Styling
        "title_colour_default": title_styling["defaultFontStyle"]["fontColour"],
        "title_size_default": title_styling["defaultFontStyle"]["fontSize"],
        "title_typeface_default": title_styling["defaultFontStyle"]["typeface"],
        # Custom Title Styling
        "title_colour_custom": title_styling["customFontStyle"]["fontColour"],
        "title_size_custom": title_styling["customFontStyle"]["fontSize"],
        "title_typeface_custom": title_styling["customFontStyle"]["typeface"],
    })


    # XAxis
    xaxis_options = labelling_options["xAxis"]
    xaxis_styling = xaxis_options["styling"]
    properties.update({
        "xaxis_text": xaxis_options["xAxisText"],
        "xaxis_style_mode": xaxis_styling["currentStylingMode"],
        # Default X-Axis Styling
        "xaxis_colour_default": xaxis_styling["defaultFontStyle"]["fontColour"],
        "xaxis_size_default": xaxis_styling["defaultFontStyle"]["fontSize"],
        "xaxis_typeface_default": xaxis_styling["defaultFontStyle"]["typeface"],
        # Custom X-Axis Styling
        "xaxis_colour_custom": xaxis_styling["customFontStyle"]["fontColour"],
        "xaxis_size_custom": xaxis_styling["customFontStyle"]["fontSize"],
        "xaxis_typeface_custom": xaxis_styling["customFontStyle"]["typeface"],
    })


    # XAxis Tick Labels
    xaxis_ticks = xaxis_options["tickLabels"]
    xaxis_ticks_styling = xaxis_ticks["styling"]
    properties.update({
        "xaxis_ticks_angle": xaxis_ticks["tickAngle"],
        "xaxis_ticks_position": xaxis_ticks["tickPosition"],
        "xaxis_ticks_style_mode": xaxis_ticks_styling["currentStylingMode"],
        # Default X-Axis Tick Label Styling
        "xaxis_ticks_colour_default": xaxis_ticks_styling["customFontStyle"]["fontColour"],
        "xaxis_ticks_size_default": xaxis_ticks_styling["customFontStyle"]["fontSize"],
        "xaxis_ticks_typeface_default": xaxis_ticks_styling["customFontStyle"]["typeface"],
        # Custom X-Axis Tick Label Styling
        "xaxis_ticks_colour_custom": xaxis_ticks_styling["customFontStyle"]["fontColour"],
        "xaxis_ticks_size_custom": xaxis_ticks_styling["customFontStyle"]["fontSize"],
        "xaxis_ticks_typeface_custom": xaxis_ticks_styling["customFontStyle"]["typeface"],
    })


    # YAxis
    yaxis_options = labelling_options["yAxis"]
    yaxis_styling = yaxis_options["styling"]
    properties.update({
        "yaxis_text": yaxis_options["yAxisText"],
        "yaxis_style_mode": yaxis_styling["currentStylingMode"],
        # Default Y-Axis Styling
        "yaxis_colour_default": yaxis_styling["defaultFontStyle"]["fontColour"],
        "yaxis_size_default": yaxis_styling["defaultFontStyle"]["fontSize"],
        "yaxis_typeface_default": yaxis_styling["defaultFontStyle"]["typeface"],
        # Custom Y-Axis Styling
        "yaxis_colour_custom": yaxis_styling["customFontStyle"]["fontColour"],
        "yaxis_size_custom": yaxis_styling["customFontStyle"]["fontSize"],
        "yaxis_typeface_custom": yaxis_styling["customFontStyle"]["typeface"],
    })


    # YAxis Tick Labels
    yaxis_ticks = yaxis_options["tickLabels"]
    yaxis_ticks_styling = yaxis_ticks["styling"]
    properties.update({
        "yaxis_ticks_angle": yaxis_ticks["tickAngle"],
        "yaxis_ticks_position": yaxis_ticks["tickPosition"],
        "yaxis_ticks_style_mode": yaxis_ticks_styling["currentStylingMode"],
        # Default Y-Axis Tick Label Styling
        "yaxis_ticks_colour_default": yaxis_ticks_styling["customFontStyle"]["fontColour"],
        "yaxis_ticks_size_default": yaxis_ticks_styling["customFontStyle"]["fontSize"],
        "yaxis_ticks_typeface_default": yaxis_ticks_styling["customFontStyle"]["typeface"],
        # Custom Y-Axis Tick Label Styling
        "yaxis_ticks_colour_custom": yaxis_ticks_styling["customFontStyle"]["fontColour"],
        "yaxis_ticks_size_custom": yaxis_ticks_styling["customFontStyle"]["fontSize"],
        "yaxis_ticks_typeface_custom": yaxis_ticks_styling["customFontStyle"]["typeface"],
    })


    # Visual Options - Colour
    visual_options = config_json["visualOptions"]["colour"]
    properties.update({
        "plot_background_colour": visual_options["plotBackgroundColourHex"],
        "plot_margin_colour": visual_options["plotMarginColourHex"],
    })


    return properties


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


def pascal_split_name(value:str) -> str:
    """Function for turning PascalCase to normal english"""
    if value is None:
        return None
    if len(value) <= 1:
        return value

    result = []
    i = 0

    while i < len(value):
        if value[i].isupper():
            if i > 0 and value[i - 1].islower():
                result.append(' ')
            elif i > 0 and i + 1 < len(value) and value[i + 1].islower():
                result.append(' ')
            result.append(value[i])
        else:
            result.append(value[i])
        i += 1

    return ''.join(result).strip()
