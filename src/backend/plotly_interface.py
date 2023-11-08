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


def generate_graph(graph_info):
    #script_dir = os.path.dirname(os.path.realpath(__file__))
    #parent_dir = os.path.dirname(script_dir)
    #json_file_path = os.path.join(parent_dir)
    #graph_info = unpack_json(json_file_path)
    graph_type = graph_info['graph-type']
    title = graph_info['title']
    x_axis_name = graph_info['x_axis_name']
    y_axis_name = graph_info['y_axis_name']
    colour = graph_info['colour']
    data = px.data.wind()   
    df = pd.DataFrame(dict(year = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009], gdp=[10,12,13,8,10,14,16,17,10,13]))
    df1 = px.data.tips()
    df2 = px.data.iris()
    
    #We have to use color_discrete_sequence=[colour] to enforce the colour in the Json

    match graph_type:
        case 'bar':
            fig = px.bar(df, x='year', y='gdp' ,color_discrete_sequence=[colour] , title = title, height = 500)
            fig.update_layout(xaxis_title = x_axis_name, yaxis_title = y_axis_name)
        case 'line':
            fig = px.line(df, x="year", y='gdp' ,color_discrete_sequence=[colour], title=title, height=500)
            fig.update_layout(xaxis_title = x_axis_name, yaxis_title = y_axis_name)
        case 'pie':
            #A very very simple pie chart 
            fig = px.pie(df1, values='tip', names='day')
        case 'scatter':
            fig = px.scatter(df2, x='sepal_width', y='sepal_length', color_discrete_sequence=[colour], height = 500, width = 1000)
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
        return pio.to_html(fig)
        #return pio.write_html(fig,path_html), pio.write_image(fig,path_png)
        #There is a solution online that suggest returning fig would work done like so
        #return fig

    



if __name__ == "__main__":
    generate_graph("mock.json")


