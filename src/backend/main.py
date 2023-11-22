"""This file is the backend's entrypoint."""
import json
from flask import Flask, Response, render_template, request
from backend import generate_graph

app = Flask(__name__)

DEFAULT_GRAPH_INFO_PATH = 'src/mock.json'
DEFAULT_DATA_PATH = 'src/fixed.json'

def main():
    """Function to run the webserver"""
    app.run(host="localhost", port=7575, debug=True)

@app.route("/", methods=["GET", "POST"])
def gen_plot(indicator: str | None = None ,graph_type: str | None = None ):
    """
    Test function for flask endpoint
    :param indicator: Optionally specify an indicator to display.
    """
    try:
        with open(DEFAULT_GRAPH_INFO_PATH, 'r', encoding='utf-8') as graph_info_file:
            graph_info = json.load(graph_info_file)
        with open(DEFAULT_DATA_PATH, 'r', encoding='utf-8') as data_file:
            data = json.load(data_file)
    except FileNotFoundError:
        return "File not found.", 404  # Return a 404 error if the file is not found
    if indicator:
        graph_info['graph_name'] = f"/breakdown_by_indicator/{indicator}"
        graph_info['title'] = indicator
        graph_info['y_axis_name'] = indicator
    if graph_type:
        graph_info['graph-type'] = graph_type
    html = generate_graph(graph_info, data)
    return html

def load_indicators(filename: str = "mock.json") -> list[str]:
    """
    Load indicators from a dataset.
    :param filename: JSON file to load from.
    :returns: A list of indicator names from the json file.
    """
    with open(filename, 'r', encoding="utf-8") as f:
        data = json.load(f)
    indicators = list(data['month']['breakdown_by_indicator'].keys())
    return indicators

@app.route("/api/generate-plot", methods=["GET", "POST"])
def test_plot_generation():
    """
    This method returns an html interface for generating plots. It can also return
    the html for a generated plot configuration.
    """
    indicators = load_indicators(DEFAULT_DATA_PATH)
    if 'indicator' in request.args and 'graph_type' in request.args: 
        indicator = request.args.get("indicator")
        graph_type = request.args.get("graph_type")
        indicator = indicators[int(indicator)]
        html = gen_plot(indicator, graph_type)
        return Response(html, mimetype="text/plain")
    return render_template("plot_generation.html", indicators=indicators)

@app.route("/api/load-indicators", methods=['GET'])
def api_load_indicators():
    indicators = load_indicators(DEFAULT_DATA_PATH)
    indicators_json = json.dumps(indicators)
    return Response(indicators_json, mimetype="application/json")

if __name__ == "__main__":
    main()
