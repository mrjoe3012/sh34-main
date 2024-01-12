"""Here we define all plotly-related interactions such as generating charts from json input."""

#Mustafa Onur Cay - 19/10/2023
from typing import Any
import os
import json
import plotly_express as px
import plotly.graph_objs as go
from plotly.subplots import make_subplots
import plotly.io as pio
import pandas as pd

class GraphInfo:
    """This is graph info class used for managing the mock.json
    files content and make it more readable"""
    #Had to add this line to circumvent pylint size limitations
    #Disabling Too many args, Too many instance attrs, too few public methods
    #pylint: disable=R0902,R0913,R0903
    def __init__(self, graph_type, title, x_axis_name, y_axis_name, colour,
                 graph_name, layer_colour, layer_type, layer_name, first_value=None):

        self.graph_type = graph_type
        self.title = title
        self.x_axis_name = x_axis_name
        self.y_axis_name = y_axis_name
        self.colour = colour
        self.graph_name = graph_name
        self.layer_colour = layer_colour
        self.layer_type = layer_type
        self.layer_name = layer_name
        self.first_value = first_value

def unpack_json(json_file_path: str) -> dict[str,Any]:
    """
    Use the json library to read a json file.
    :param json_file_path: The json file path string.
    :returns: The json file as a dictionary.
    """
    with open(json_file_path, 'r', encoding='utf-8') as file:
        graph_data = json.load(file)

    return graph_data

def populate_graph_info(graph_info:dict[str,Any]) -> GraphInfo:
    """The Function is used to create an instance of
    GraphInfo that is then used to create the graphs"""
    info = GraphInfo(

    graph_type = graph_info['graph_type'],
    title = graph_info['title'],
    x_axis_name = graph_info['x_axis_name'],
    y_axis_name = graph_info['y_axis_name'],
    colour = graph_info['colour'],
    graph_name = graph_info['graph_name'],
    layer_colour = graph_info['layer_colour'],
    layer_type = graph_info['layer_type'],
    layer_name = graph_info['layer_name'],
    )
    return info

def generate_graph(graph_info:dict[str,Any], data_json:dict[str,Any]) -> str:
    """
    Generates graphs for a given json config and data file.
    :param graph_info: Config Json file.
    :param data: Data file containing the data to be graphed.
    :returns: a html string of the graph.
    """

    g1 = populate_graph_info(graph_info)

    # You can set a value or the value will be automatically set. This is done via the mock.json
    try:
        first_value = graph_info["y_axis"]
    except KeyError:
        first_value = "value"

    df = data_extract(data_json, g1.graph_name, first_value)


    # We have to use color_discrete_sequence=[colour] to enforce the colour in the Json
    fig = make_subplots(specs=[[{"secondary_y": True}]])
    match g1.graph_type:
        case 'bar':
            trace = go.Bar(
                x=df['x'], y=df['y'],
                marker={"color" : g1.colour},
                name = pascal_split_name(g1.y_axis_name)
            )
            fig.update_layout(xaxis_title = g1.x_axis_name,
                              yaxis_title = pascal_split_name(g1.y_axis_name),
                              title=pascal_split_name(g1.title),
                              height = 500
                              )
        case 'line':
            trace = go.Line(
                x=df['x'], y=df['y'],
                marker={"color" : g1.colour},
                name = pascal_split_name(g1.y_axis_name),
                mode = "lines+markers",
                line = {"width":3},
                marker_size = 10
                )
            fig.update_layout(xaxis_title = g1.x_axis_name,
                              yaxis_title = pascal_split_name(g1.y_axis_name),
                              title=pascal_split_name(g1.title),
                              height = 500)
        case 'pie':
            # A very very simple pie chart
            trace = go.Pie(
                labels=df['x'], values=df['y']


            )
            fig.update_layout(height=500,
                              width=500,
                              title=pascal_split_name(g1.title),
                              )
        case 'scatter':
            trace = go.Scatter(
                x=df['x'], y=df['y'],
                marker={"color" : g1.colour},
                name = pascal_split_name(g1.y_axis_name),
                mode = "markers",
                line = {"width":3},
                marker_size = 10
            )
            fig.update_layout(xaxis_title = g1.x_axis_name,
                              yaxis_title = pascal_split_name(g1.y_axis_name),
                              title=pascal_split_name(g1.title),
                              height = 500)
        case _:
            print('\n')
            raise ValueError(
                "Please make sure you are entering 'bar', 'line', \
                'pie', 'scatter' or 'special' as your graph type."
            )

    fig.add_trace(trace)

    if g1.layer_type != "":
        df2 = data_extract(data_json, g1.layer_name, first_value)
        fig.update_layout(yaxis_title = "")
        match g1.layer_type:
            case 'bar':
                trace2 = go.Bar(x = df2['x'], y = df2['y'],
                                name = 'Wind', yaxis = 'y2',
                                opacity = 0.75, marker = {"color" : g1.layer_colour})
            case 'line':
                trace2 = go.Line(x = df2['x'], y = df2['y'],
                                 name = 'Wind', yaxis = 'y2',
                                 opacity = 0.75, marker = {"color" : g1.layer_colour})
            case 'scatter':
                trace2 = go.Scatter(x = df2['x'], y = df2['y'],
                                    name = 'Wind', yaxis = 'y2',
                                    opacity = 0.75, marker = {"color" : g1.layer_colour} )
        fig.add_trace(trace2,secondary_y=True)

    if fig is not None:
        # Path to be returned to
        directory = "return_plot/"
        os.makedirs(directory, exist_ok=True)
        return pio.to_html(fig, full_html=False)
    raise ValueError("Was not able to plot a graph")

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

    for key in named_data:
        #print("----------------------------------------------------------------------------------")
        #print((key))
        pass

    #print(data_json.items()[0])
    #print(company_name)

    if "aa" == "pie":
        pass
    else:
        for entry in named_data:
            first_key = list(entry.keys())[0]
            data_dict["x"].append(entry[first_key])
            try:
                #print(first_value)
                data_dict["y"].append(entry[first_value])

            except KeyError:
                data_dict["y"].append(None)
        df = pd.DataFrame(data_dict)
    print(df["x"])
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


if __name__ == "__main__":
    #generate_graph(unpack_json('../mock.json'),unpack_json('../fixed.json'))
    pass
