##################################################
# Here we define all plotly-related interactions #
# such as generating charts from json input.     #
##################################################

#This script is meant for showing some example features of plotly and mock graph generation
#Mustafa Onur Cay - 19/10/2023
import argparse
import os
import json
import plotly_express as px
import plotly.io as pio 
import pandas as pd

def unpack_json(json_file_path):
    with open(json_file_path, 'r') as file:
        graph_data = json.load(file)

    return graph_data


def generate_graph(graph_info, data):
    
    graph_type = graph_info['graph-type']
    title = graph_info['title']
    x_axis_name = graph_info['x_axis_name']
    y_axis_name = graph_info['y_axis_name']
    colour = graph_info['colour']
    name = graph_info['graph_name']
    df = data_extract(data, name)
    
    
    #We have to use color_discrete_sequence=[colour] to enforce the colour in the Json

    match graph_type:
        case 'bar':
            fig = px.bar(df, x='date', y='value' ,color_discrete_sequence=[colour] , title = title, height = 500)
            fig.update_layout(xaxis_title = x_axis_name, yaxis_title = y_axis_name)
        case 'line':
            fig = px.line(df, x="date", y='value' ,color_discrete_sequence=[colour], title=title, height=500)

            fig.update_layout(xaxis_title = x_axis_name, yaxis_title = y_axis_name)
            fig.update_traces(line=dict(width=4))
        case 'pie':
            #A very very simple pie chart 
            fig = px.pie(df, x="date", y='value' ,color_discrete_sequence=[colour], title=title, height=500)
        case 'scatter':
            fig = px.scatter(df, x="date", y='value' ,color_discrete_sequence=[colour], title=title, height=500)
        case 'special':
            fig = px.scatter_polar(data, r="frequency", theta="direction", color="strength", symbol="strength",color_discrete_sequence=px.colors.sequential.Plasma_r)
            
        case _:
            print('\n')
            raise ValueError("Please make sure you are entering 'bar', 'line', 'pie', 'scatter' or 'special' as your graph type.")

    if fig != None:
        #Path to be returned to 
        directory = "return_plot/"
        os.makedirs(directory, exist_ok=True)
        path_html = os.path.join(directory, 'figure.html')
        path_png = os.path.join(directory, 'figure.png')
        #Return Html and PNG
        #return pio.to_html(fig)
        return pio.write_html(fig,path_html), pio.write_image(fig,path_png)
        #There is a solution online that suggest returning fig would work done like so
        #return fig

def data_extract(data_json,name):
    #with open(data_json, 'r') as file:
    #    graph_data = json.load(file)

    data_dict = {"date":[],"value":[]}
    monthly_data = data_json["month"]
    breakdowns = monthly_data["breakdown_by_indicator"]
    named_data = breakdowns[name]

    for entry in named_data:
        #print(entry.keys())
        data_dict["date"].append(entry["date"])
        data_dict["value"].append(entry["value"])
    df = pd.DataFrame(data_dict)
    print(df)
    return df
    
 



if __name__ == "__main__":
    #generate_graph("mock.json")
    pass

