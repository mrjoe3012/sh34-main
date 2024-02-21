import unittest
import plotly.graph_objs as go
from backend.plotly_interface import update_traces, update_xaxis, update_yaxis, update_plotsize, update_plot_colours
from backend.plotly_interface import update_grid_lines, update_xaxis_ticklabels, update_yaxis_ticklabels, update_title, update_annotations
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
                "plotDataX": "breakdown_by_indicator.TemperatureMean.date",
                "plotDataY": "breakdown_by_indicator.TemperatureMean.value",
                "markerColour" : "#aabbcc",
                "orientation" : "v"
            },
            {
                "id" : 1,
                "name" : "trace2",
                "plotType" : "Scatter",
                "plotDataX": "breakdown_by_indicator.TemperatureMean.date",
                "plotDataY": "breakdown_by_indicator.TemperatureMean.value",
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


"""
The following function tests the update_plotsize function, it creates two dummy properties and feeds them and
a dummy plotly figure to the function, checking whether assignment of atttributes is performed correctly

"""


class TestUpdatePlotSize(unittest.TestCase):


    #Create a dummy plotly figure
    def setUp(self):
        self.fig = go.Figure()



    #Create the dummy properties and pass them and the figure to the function
    def test_update_plotsize(self):

        properties = {
            "plot_width" : 800,
            "plot_height" : 600
        }

        new_fig = update_plotsize(self.fig, properties)


        #Check the expected values set by the function are correct
        self.assertEqual(new_fig.layout.width, 800)
        self.assertEqual(new_fig.layout.height, 600)


"""
The following function tests the update_plot_colours function, it creates a dummy plotly figure and then passes
test data to the function, then checking for correct assigment of attributes
"""


class TestUpdatePlotColour(unittest.TestCase):

    #Create dummy plotly figure
    def setUp(self):
        self.fig = go.Figure()


    #Create a dummy set of properties that are then passed to the function
    def test_update_plot_colour(self):

        properties = {
            "plot_background_colour" : "red",
            "plot_margin_colour" : "blue"
        }

        new_fig = update_plot_colours(self.fig, properties)


        #Check for correct assigment of attributes
        self.assertEqual(new_fig.layout.plot_bgcolor, "red")
        self.assertEqual(new_fig.layout.paper_bgcolor, "blue")

"""
The following function tests the update_grid_lines function, creating a dummy plotly figure and
passing it and dummy properties for the presence of girdlines to the function, it then checks
for correct assigment of these proprties in the figure
"""

class TestUpdateGridLines(unittest.TestCase):

    #Create a dummy plotly figure
    def setUp(self):
        self.fig = go.Figure()

    #Create test data for plotlines and pass them to the function
    def test_update_grid_lines(self):
        properties = {
            "display_xaxis_gridlines" : True,
            "display_yaxis_gridlines" : False
        }

        new_fig = update_grid_lines(self.fig, properties)


        #Check for correct assigment of variables to the properites within the figure
        self.assertEqual(new_fig.layout.xaxis.showgrid, True)
        self.assertEqual(new_fig.layout.yaxis.showgrid, False)


"""
The following function tests the update_x_axis_tick_labels function, it creates a dummy plotly
figure and defines some properties to pass to the function, it then checks if these properties have been correctly assigned
by the function, it first tests for default values and then tests custom values
"""


class TestXAxisTickLabels(unittest.TestCase):

    #Create dummy plotly figure
    def setUp(self):
        self.fig = go.Figure()


    #Create test values which will then be passed to the function and should be assigned to attributes of the plot
    def test_update_xaxis_tick_labels_default(self):

        properties = {
            "xaxis_ticks_angle" : 0,
            "xaxis_ticks_position" : "top",
            "xaxis_ticks_style_mode" : "default",
            "xaxis_ticks_typeface_default" : "Arial",
            "xaxis_ticks_size_default": 12,
            "xaxis_ticks_colour_default": "black"
        }

        new_fig = update_xaxis_ticklabels(self.fig, properties)

        #Check for correct asssignment of properties in the function
        self.assertEqual(new_fig.layout.xaxis.tickangle, 0)
        self.assertEqual(new_fig.layout.xaxis.side, "top")
        self.assertEqual(new_fig.layout.xaxis.tickfont.family, "Arial")
        self.assertEqual(new_fig.layout.xaxis.tickfont.size, 12)
        self.assertEqual(new_fig.layout.xaxis.tickfont.color, "black")


        #This is then repeated for the custom values

    def test_update_xaxis_ticklabels_custom(self):

        properties = {
            "xaxis_ticks_angle": 45,
            "xaxis_ticks_position": "bottom",
            "xaxis_ticks_style_mode": "custom",
            "xaxis_ticks_typeface_custom": "Times New Roman",
            "xaxis_ticks_size_custom": 14,
            "xaxis_ticks_colour_custom": "blue"
        }

        new_fig = update_xaxis_ticklabels(self.fig, properties)

        self.assertEqual(new_fig.layout.xaxis.tickangle, 45)
        self.assertEqual(new_fig.layout.xaxis.side, "bottom")
        self.assertEqual(new_fig.layout.xaxis.tickfont.family, "Times New Roman")
        self.assertEqual(new_fig.layout.xaxis.tickfont.size, 14)
        self.assertEqual(new_fig.layout.xaxis.tickfont.color, "blue")


"""
The following function tests the functionality of the update_yaxis_ticklabels function, the way it operates
is the same as the update_yaxis_ticklabels function
"""

class TestUpdateYAxisTickLabels(unittest.TestCase):

    def setUp(self):
        self.fig = go.Figure()

    def update_yaxis_ticklabels_default(self):

        properties = {
            "yaxis_ticks_angle" : 0,
            "yaxis_ticks_position" : "left",
            "yaxis_ticks_style_mode" : "default",
            "yaxis_ticks_typeface_default" : "Arial",
            "yaxis_ticks_size_default": 12,
            "yaxis_ticks_colour_default": "black"
        }

        new_fig = update_yaxis_ticklabels(self.fig, properties)

        self.assertEqual(new_fig.layout.yaxis.tickangle, 0)
        self.assertEqual(new_fig.layout.yaxis.side, "left")
        self.assertEqual(new_fig.layout.yaxis.tickfont.family, "Arial")
        self.assertEqual(new_fig.layout.yaxis.tickfont.size, 12)
        self.assertEqual(new_fig.layout.yaxis.tickfont.color, "black")

    def test_update_xaxis_ticklabels_custom(self):

        properties = {
            "yaxis_ticks_angle": 90,
            "yaxis_ticks_position": "right",
            "yaxis_ticks_style_mode": "custom",
            "yaxis_ticks_typeface_custom": "Times New Roman",
            "yaxis_ticks_size_custom": 16,
            "yaxis_ticks_colour_custom": "red"
        }

        new_fig = update_yaxis_ticklabels(self.fig, properties)

        self.assertEqual(new_fig.layout.yaxis.tickangle, 90)
        self.assertEqual(new_fig.layout.yaxis.side, "right")
        self.assertEqual(new_fig.layout.yaxis.tickfont.family, "Times New Roman")
        self.assertEqual(new_fig.layout.yaxis.tickfont.size, 16)
        self.assertEqual(new_fig.layout.yaxis.tickfont.color, "red")


"""
The following function tests the update_title function, it creates dummy attributes for the title and a
dummy plot figure, passing them to the function and then finally checking their correct assignment
"""


class TestUpdateTitle(unittest.TestCase):

    #Create a dummy plot figure which will be passed to the function
    def setUp(self):
        self.fig = go.Figure()

    #Create dummy values which will be passed to the function along with the dummy figure
    def test_update_title_default(self):

        properties = {
            "title_style_mode" : "default",
            "plot_title" : "test_title_default",
            "title_typeface_default" : "Arial",
            "title_size_default" : 12,
            "title_colour_default" : "black"
        }


        #pass the test values to the function
        new_fig = update_title(self.fig, properties)



        #check for correct assignment of the values to the attributes of the title
        self.assertEqual(new_fig.layout.title.text, "test_title_default")
        self.assertEqual(new_fig.layout.title.font.family, "Arial")
        self.assertEqual(new_fig.layout.title.font.size, 12)
        self.assertEqual(new_fig.layout.title.font.color, "black")


    #perform the same process with the custom values
    def test_update_title_custom(self):

        properties = {
            "title_style_mode" : "custom",
            "plot_title" : "test_title_custom",
            "title_typeface_custom" : "Times New Roman",
            "title_size_custom" : 14,
            "title_colour_custom" : "red"
        }

        new_fig = update_title(self.fig, properties)

        self.assertEqual(new_fig.layout.title.text, "test_title_custom")
        self.assertEqual(new_fig.layout.title.font.family, "Times New Roman")
        self.assertEqual(new_fig.layout.title.font.size, 14)
        self.assertEqual(new_fig.layout.title.font.color, "red")


"""
This function tests the update_annotations function, it creates a dummy set of annotations which
it will pass to the function, it then checks for correct assignment of these values, this is
performed in a loop as multiple annotations can be defined, however i have only defined one
"""
class TestUpdateAnnotations(unittest.TestCase):

    #Create a dummy figure to pass to the function
    def setUp(self):
        self.fig = go.Figure()


    #Create test values to pass to the function along with the dummy figure
    def test_update_annotations(self):

        properties = {
            "annotations" : [
                {
                    "xPos" : 0.5,
                    "yPos" : 0.5,
                    "xref" : "paper",
                    "yref" : "paper",
                    "text" : "annotation",
                    "showArrow" : False,
                    "arrowColour" : "black",
                    "arrowOffsetX" : 20,
                    "arrowOffsetY" : -20,
                    "arrowWidth" : 2,
                    "styling" : {
                        "fontColour" : "black",
                        "fontSize" : 12,
                        "typeface" : "Arial"
                    }

                }
            ]
        }


        #Run the function
        new_fig = update_annotations(self.fig, properties)


        #loop through each of the annotations of the figure, checking each attribute has been assigned correctly
        for i,annotation in enumerate(properties["annotations"]):

            current_fig_annotation = new_fig.layout.annotations[i]

            self.assertEqual(current_fig_annotation.x, annotation["xPos"])
            self.assertEqual(current_fig_annotation.y, annotation["yPos"])
            self.assertEqual(current_fig_annotation.xref, annotation["xref"])
            self.assertEqual(current_fig_annotation.yref, annotation["yref"])
            self.assertEqual(current_fig_annotation.text, annotation["text"])
            self.assertEqual(current_fig_annotation.showarrow, annotation["showArrow"])
            self.assertEqual(current_fig_annotation.arrowcolor, annotation["arrowColour"])
            self.assertEqual(current_fig_annotation.ax, annotation["arrowOffsetX"])
            self.assertEqual(current_fig_annotation.ay, annotation["arrowOffsetY"])
            self.assertEqual(current_fig_annotation.arrowwidth, annotation["arrowWidth"])
            self.assertEqual(current_fig_annotation.font.color, annotation["styling"]["fontColour"])
            self.assertEqual(current_fig_annotation.font.size, annotation["styling"]["fontSize"])
            self.assertEqual(current_fig_annotation.font.family, annotation["styling"]["typeface"])


if __name__ == '__main__':
    unittest.main()