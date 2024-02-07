import unittest
import plotly.graph_objs as go
from backend.plotly_interface import generate_plot_png, update_traces
import json
import os
import hashlib
from PIL import Image
import plotly.io as pio
import io


class TestEntireConfiguration(unittest.TestCase):

    def hash_image(self, image):

        if not isinstance(image, bytes):
            image_data = image.read()
        else:
            image_data = image

        
        hash_function = hashlib.md5()
        hash_function.update(image_data)
        return hash_function.hexdigest()


    def setUp(self):
        self.manual_fig = go.Figure()
        self.test_fig = go.Figure()

    def test_configuration(self):

        config_json = { "traces" : [
            {
                "id" : 0,
                "name" : "trace1",
                "plotType" : "Bar",
                "plotIndicator" : "/breakdown_by_indicator/TemperatureMean",
                "markerColour" : "#aabbcc",
                "orientation" : "v"
            }
        ]
        }
        

        test_script_directory = os.path.dirname(os.path.abspath(__file__))
        os.chdir(test_script_directory)

        #read in the mock data from dataset.json
        with open('../fixed.json', 'r') as f:
            data_json = json.load(f)

        with open("config_test.json", 'r') as f:
            test_config_json = json.load(f)

        #assign the traces to the graph
        self.manual_fig = update_traces(self.manual_fig, config_json, data_json)

        self.manual_fig.update_layout(
            xaxis_title_text="test_xaxis_name_default",
            xaxis_title_font_size=12,
            xaxis_title_font_color="black",
            xaxis_title_font_family="Arial",
            yaxis_title_text="test_yaxis_name_default",
            yaxis_title_font_size = 12,
            yaxis_title_font_color = "black",
            yaxis_title_font_family = "Arial",
            width = 800,
            height = 800,
            plot_bgcolor = "red",
            paper_bgcolor = "blue",
            xaxis_showgrid = True,
            yaxis_showgrid = False,
            xaxis_tickangle = 0,
            xaxis_side = "top",
            xaxis_tickfont_family = "Arial",
            xaxis_tickfont_size = 12,
            xaxis_tickfont_color = "black",
            yaxis_tickangle = 0,
            yaxis_side = "left",
            yaxis_tickfont_family = "Arial",
            yaxis_tickfont_size = 12,
            yaxis_tickfont_color = "black",
            title_text = "test_title_default",
            title_font_family = "Arial",
            title_font_size = 12,
            title_font_color = "black"
        )

        self.test_image = generate_plot_png(test_config_json, data_json)

        self.manual_image = pio.to_image(self.manual_fig,format='png')

        hashed_manual = self.hash_image(self.manual_image)
        hashed_test = self.hash_image(self.test_image)

        self.assertEqual(hashed_manual, hashed_test)

    def tearDown(self):
        os.chdir(os.path.dirname(os.path.abspath(__file__)))

if __name__ == '__main__':
    unittest.main()