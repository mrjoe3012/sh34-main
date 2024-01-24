import unittest
import plotly.graph_objs as go
from backend.plotly_interface import update_traces


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
        config_json =  {"traces" : [
                {"plotType": "Bar", "plotIndicator": "bar_data", "name": "Trace1", "markerColour": "blue"},
                {"plotType": "Scatter", "plotIndicator": "scatter_data", "name": "Trace2", "markerColour": "red"},
            ]
        }

        data_json = {
            "bar_data" : {"x" : [1,2,3], "y" : [4,5,6]},
            "scatter_data" : {"x": [2,4,6], "y" : [8,10,12]},
        }

        new_fig = update_traces(self.fig, config_json, data_json)

        self.assertEqual(len(new_fig.data), len(config_json["traces"]))


if __name__ == '__main__':
    unittest.main()



