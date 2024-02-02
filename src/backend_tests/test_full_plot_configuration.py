import unittest
import plotly.graph_objs as go
from backend.plotly_interface import generate_plot_html, update_traces
import json
import os
import hashlib
from PIL import Image
import plotly.io as pio


class TestEntireConfiguration(unittest.TestCase):

    def plot_to_image_hash(self, fig):
        bytes = pio.to_image(fig, format="png")

        image = Image.open(io.BytesIO(bytes))

        hash_function = hashlib.md5()
        hash_function.update(image.tobytes())
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

        self.test_fig = generate_plot_html(test_config_json, data_json)

        test_hash = self.plot_to_image_hash(self.test_fig)
        manual_hash = self.plot_to_image_hash(self.manual_fig)

        self.assertEqual(test_hash, manual_hash)

    def tearDown(self):
        os.chdir(os.path.dirname(os.path.abspath(__file__)))

if __name__ == '__main__':
    unittest.main()