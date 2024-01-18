"""This file is the backend's entrypoint."""
import json
from flask import Flask, Response, render_template, request
from backend import generate_plot_html

app = Flask(__name__)

DEFAULT_GRAPH_INFO_PATH = 'src/mock.json'
DEFAULT_DATA_PATH = 'src/fixed.json'

def main():
    """Function to run the webserver"""
    app.run(host="0.0.0.0", port=7575, debug=True)


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

@app.route("/api/plotfromconfig", methods=["GET", "POST"])
def generate_plot():

    if request.method == "POST":
        config_json = request.get_json()

    try:
        with open(DEFAULT_GRAPH_INFO_PATH, 'r', encoding='utf-8') as graph_info_file:
            graph_info = json.load(graph_info_file)
        with open(DEFAULT_DATA_PATH, 'r', encoding='utf-8') as data_file:
            data_json = json.load(data_file)
    except:
        print("File not Found")


    plot_html = generate_plot_html(config_json,data_json)
    return Response(plot_html, mimetype="text/html")

@app.route("/api/load-indicators", methods=['GET'])
def api_load_indicators():
    """
    This endpoint returns a list of strings which are valid indicators
    to be loaded from the json file.
    """
    indicators = load_indicators(DEFAULT_DATA_PATH)
    indicators_json = json.dumps(indicators)
    return Response(indicators_json, mimetype="application/json")

if __name__ == "__main__":
    main()
