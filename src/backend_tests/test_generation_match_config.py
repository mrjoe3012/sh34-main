import unittest
import plotly.graph_objs as go
from backend.plotly_interface import update_traces
import json


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

        #read in the mock data from dataset.json
        with open('../dataset.json', 'r') as f:
            data_json = json.load(f)

        #assign the traces to the graph
        new_fig = update_traces(self.fig, config_json, data_json)

        #check whether traces have been assigned correctly
        self.assertEqual(len(new_fig.data), len(config_json["traces"]))


if __name__ == '__main__':
    unittest.main()



