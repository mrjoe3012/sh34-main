import unittest
import plotly.graph_objs as go
from backend.plotly_interface import update_traces, update_xaxis, update_yaxis, update_plotsize, update_plot_colours, update_grid_lines
import json
import os

""" 
The following test creates a dummy config_json file and passes it to the update_traces file,
checking whether the correct number of traces have been assigned
"""
class TestUpdateTraces(unittest.TestCase):

    #set up dummy figure
    def setUp(self):
        self.fig = go.Figure()

    #create a mock config json to be passed to the traces
    def test_update_traces(self):
        config_json = { "traces" : [
            {
                "id" : 0,
                "name" : "trace1",
                "plotType" : "Bar",
                "plotIndicator" : "/breakdown_by_indicator/TemperatureMean",
                "markerColour" : "#aabbcc",
                "orientation" : "v"
            },
            {
                "id" : 1,
                "name" : "trace2",
                "plotType" : "Scatter",
                "plotIndicator" : "/breakdown_by_indicator/TemperatureMean",
                "markerColour" : "#00cc11",
                "orientation" : "v"
            }
        ]
        }

        #change working directory so that dataset file can be easily found

        test_script_directory = os.path.dirname(os.path.abspath(__file__))
        os.chdir(test_script_directory)

        #read in the mock data from dataset.json
        with open('../fixed.json', 'r') as f:
            data_json = json.load(f)

        #assign the traces to the graph
        new_fig = update_traces(self.fig, config_json, data_json)

        #check whether traces have been assigned correctly
        self.assertEqual(len(new_fig.data), len(config_json["traces"]))

    #change working directory back to original state

    def tearDown(self):
        os.chdir(os.path.dirname(os.path.abspath(__file__)))


"""
The following class tests the update_x_axis function, it checks whether the correct 
assignments are made to the values associated with the x axis label in the plot,
checking both default and custom configurations

"""

class TestUpdateXAxis(unittest.TestCase):

    #create a dummy figure to add data to
    def setUp(self):
        self.fig = go.Figure() 
    
    #Create some dummy data to feed to the update_xaxis function, the following tests whether default
    #values are correctly assigned
    def test_update_x_axis_default(self):
        properties = {
            "xaxis_style_mode": "default",
            "xaxis_text" : "test_axis_name_default",
            "xaxis_size_default" : 12,
            "xaxis_colour_default" : "black",
            "xaxis_typeface_default" : "Arial"
        }  

        #pass the function the dictionary from above containing the values
        new_fig = update_xaxis(self.fig, properties)

        #Check that those values have been correctly assigned to the attributes of the figures x_axis

        self.assertEqual(new_fig.layout.xaxis.title.text, "test_axis_name_default")
        self.assertEqual(new_fig.layout.xaxis.title.font.size, 12)
        self.assertEqual(new_fig.layout.xaxis.title.font.color, "black")
        self.assertEqual(new_fig.layout.xaxis.title.font.family, "Arial")

    
    #now test with custom values
    def test_update_x_axis_custom(self):

        #set up some dummy custom values to send to the function
        properties = {
            "xaxis_style_mode": "custom",
            "xaxis_text" : "test_axis_name_custom",
            "xaxis_size_custom" : 14,
            "xaxis_colour_custom" : "red",
            "xaxis_typeface_custom" : "Times New Roman"
        }


        #pass the custom values to the function, along with the figure
        new_fig = update_xaxis(self.fig, properties)


        #check that the values were correctly assigned to the attributes of the x_axis
        self.assertEqual(new_fig.layout.xaxis.title.text, "test_axis_name_custom")
        self.assertEqual(new_fig.layout.xaxis.title.font.size, 14)
        self.assertEqual(new_fig.layout.xaxis.title.font.color, "red")
        self.assertEqual(new_fig.layout.xaxis.title.font.family, "Times New Roman")


"""
The following function tests the update_yaxis function, checking that the correct values
are assigned to the properties of the y axis in the plot passed to the function

"""
class TestUpdateYAxis(unittest.TestCase):

    
    #set up a dummy figure to assign values to
    def setUp(self):
        self.fig = go.Figure()


    #create some dummy values to pass to the function, these mirror the default values that would be assigned
    def test_update_y_axis_default(self):
        properties = {
            "yaxis_style_mode": "default",
            "yaxis_text" : "test_axis_name_default",
            "yaxis_size_default" : 12,
            "yaxis_colour_default" : "black",
            "yaxis_typeface_default" : "Arial"
        }

        #pass the dummy values to the function

        new_fig = update_yaxis(self.fig, properties)

        #check whether each of the attributes have been assigned correctly to the plots yaxis
        self.assertEqual(new_fig.layout.yaxis.title.text, "test_axis_name_default")
        self.assertEqual(new_fig.layout.yaxis.title.font.size, 12)
        self.assertEqual(new_fig.layout.yaxis.title.font.color, "black")
        self.assertEqual(new_fig.layout.yaxis.title.font.family, "Arial")

    #the process is then repeated for custom values

    def test_update_y_axis_custom(self):

        properties = {
            "yaxis_style_mode": "custom",
            "yaxis_text" : "test_axis_name_custom",
            "yaxis_size_custom" : 14,
            "yaxis_colour_custom" : "red",
            "yaxis_typeface_custom" : "Times New Roman"
        }

        new_fig = update_yaxis(self.fig, properties)

        self.assertEqual(new_fig.layout.yaxis.title.text, "test_axis_name_custom")
        self.assertEqual(new_fig.layout.yaxis.title.font.size, 14)
        self.assertEqual(new_fig.layout.yaxis.title.font.color, "red")
        self.assertEqual(new_fig.layout.yaxis.title.font.family, "Times New Roman")


class TestUpdatePlotSize(unittest.TestCase):

    def setUp(self):
        self.fig = go.Figure()

    def test_update_plotsize(self):

        properties = {
            "plot_width" : 800,
            "plot_height" : 600
        }
        
        new_fig = update_plotsize(self.fig, properties)

        self.assertEqual(new_fig.layout.width, 800)
        self.assertEqual(new_fig.layout.height, 600)


class TestUpdatePlotColour(unittest.TestCase):


    def setUp(self):
        self.fig = go.Figure()

    def test_update_plot_colour(self):

        properties = {
            "plot_background_colour" : "red",
            "plot_margin_colour" : "blue"
        }

        new_fig = update_plot_colours(self.fig, properties)

        self.assertEqual(new_fig.layout.plot_bgcolor, "red")
        self.assertEqual(new_fig.layout.paper_bgcolor, "blue")

class TestUpdateGridLines(unittest.TestCase):
    def setUp(self):
        self.fig = go.Figure()

    def test_update_grid_lines(self):
        properties = {
            "display_xaxis_gridlines" : True,
            "display_yaxis_gridlines" : False
        }

        new_fig = update_grid_lines(self.fig, properties)

        self.assertEqual(new_fig.layout.xaxis.showgrid, True)
        self.assertEqual(new_fig.layout.yaxis.showgrid, False)
        


if __name__ == '__main__':
    unittest.main()