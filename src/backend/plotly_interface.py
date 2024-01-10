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

def unpack_json(json_file_path: str) -> dict[str,Any]:
    """
    Use the json library to read a json file.
    :param json_file_path: The json file path string.
    :returns: The json file as a dictionary.
    """
    with open(json_file_path, 'r', encoding='utf-8') as file:
        graph_data = json.load(file)

    return graph_data


def generate_graph(graph_info:dict[str,Any], data_json:dict[str,Any]) -> str:
    """
    Generates graphs for a given json config and data file.
    :param graph_info: Config Json file.
    :param data: Data file containing the data to be graphed.
    :returns: a html string of the graph. 
    """
    graph_type = graph_info['graph_type']
    layer_type = graph_info['layer_type']
    layer_name = graph_info['layer_name']
    title = graph_info['title']
    x_axis_name = graph_info['x_axis_name']
    y_axis_name = graph_info['y_axis_name']
    colour = graph_info['colour']
    name = graph_info['graph_name']
    layer_colour = graph_info['layer_colour']

    # You can set a value or the value will be automatically set. This is done via the mock.json
    try:
        first_value = graph_info["y_axis"]
    except KeyError:
        first_value = "value"

    df = data_extract(data_json, name, first_value)


    # We have to use color_discrete_sequence=[colour] to enforce the colour in the Json
    fig = make_subplots(specs=[[{"secondary_y": True}]])
    match graph_type:
        case 'bar':
            trace = go.Bar(
                x=df['x'], y=df['y'],
                marker=dict(color = colour),
                name = pascal_split_name(y_axis_name)
            )
            fig.update_layout(xaxis_title = x_axis_name,
                              yaxis_title = pascal_split_name(y_axis_name),
                              title=pascal_split_name(title),
                              height = 500
                              )
            
        case 'line':
            trace = go.Line(
                x=df['x'], y=df['y'],
                marker=dict(color =colour),
                name = pascal_split_name(y_axis_name),
                mode = "lines+markers",
                line = dict(width=3),
                marker_size = 10
                )
            fig.update_layout(xaxis_title = x_axis_name,
                              yaxis_title = pascal_split_name(y_axis_name),
                              title=pascal_split_name(title),
                              height = 500)
            fig.update_traces(line={ 'width' : 10000})
        case 'pie':
            # A very very simple pie chart
            fig = px.pie(
                df, color_discrete_sequence=[colour],
                title=pascal_split_name(title),
                height=500
            )
            fig.update_layout(xaxis_title = x_axis_name,
                              yaxis_title = pascal_split_name(y_axis_name))
        case 'scatter':
            trace = go.Scatter(
                x=df['x'], y=df['y'],
                marker=dict(color = colour),
                name = pascal_split_name(y_axis_name),
                mode = "markers",
                line = dict(width=4),
                marker_size = 10
            )
            fig.update_layout(xaxis_title = x_axis_name,
                              yaxis_title = pascal_split_name(y_axis_name),
                              title=pascal_split_name(title),
                              height = 500)
        case _:
            print('\n')
            raise ValueError(
                "Please make sure you are entering 'bar', 'line', \
                'pie', 'scatter' or 'special' as your graph type."
            )
    df2 = data_extract(data_json, layer_name, first_value)
    fig.add_trace(trace)
    if layer_type != "":
        fig.update_layout(yaxis_title = "")
        match layer_type:
            
            case 'bar':
                trace2 = go.Bar(x = df2['x'], y = df2['y'],
                                name = 'Wind', yaxis = 'y2', 
                                opacity = 0.75, marker = dict(color = layer_colour))
            
                fig.add_trace(trace2,secondary_y=True)
            case 'line':
                trace2 = go.Line(x = df2['x'], y = df2['y'], 
                                 name = 'Wind', yaxis = 'y2', 
                                 opacity = 0.75, marker = dict(color = layer_colour))
            
                fig.add_trace(trace2,secondary_y=True)
            case 'scatter':
                trace2 = go.Scatter(x = df2['x'], y = df2['y'], 
                                    name = 'Wind', yaxis = 'y2', 
                                    opacity = 0.75, marker = dict(color = layer_colour))
                                    
            
                fig.add_trace(trace2,secondary_y=True)
            
                

    if fig is not None:
        # Path to be returned to
        directory = "return_plot/"
        os.makedirs(directory, exist_ok=True)

        ####################################################
        # Uncomment the next 3 lines to write HTML and PNG #
        ####################################################

        #path_html = os.path.join(directory, 'figure.html')
        #path_png = os.path.join(directory, 'figure.png')
        #return pio.write_html(fig,path_html), pio.write_image(fig,path_png)

        return pio.to_html(fig, full_html=False)
        #There is a solution online that suggest returning fig would work done like so
        #return fig
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
    #with open(data_json, 'r') as file:
    #    graph_data = json.load(file)

    data_dict = {"x":[],"y":[]}
    monthly_data = data_json["month"]
    graph_name_split = name.split('/')
    level1 = graph_name_split[1]
    named_data = monthly_data[level1]
    if len(graph_name_split)== 3:
        level2 = graph_name_split[2]
        named_data = named_data[level2]

    #print(named_data)
    # asset_data = data_json["asset"]
    # company_name = asset_data["client_name"]
    # plant_loc = asset_data["location"]
    # currency = asset_data["currency"]


    #for key,value in data_json.items():
    #    print(key)

    #print(data_json.items()[0])
    #print(company_name)

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


if __name__ == "__main__":
    #generate_graph(unpack_json('../mock.json'),unpack_json('../fixed.json'))
    pass
