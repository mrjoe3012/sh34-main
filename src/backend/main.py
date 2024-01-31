"""This file is the backend's entrypoint."""
import json
from flask import Flask, Response, request
from backend import generate_plot_html, generate_plot_htmls

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

@app.route("/api/plot-from-config", methods=["POST"])
def generate_plot():
    """
        Receives a config_json JSON from the frontend. Calls generate_plot_html
        to create a plotly figure from the config_json. Then sends this html
        back to sender, so it can be displayed on screen.
    """

    config_json = request.get_json()

    with open(DEFAULT_DATA_PATH, 'r', encoding='utf-8') as data_file:
        data_json = json.load(data_file)

    plot_html = generate_plot_html(config_json,data_json)
    return Response(plot_html, mimetype="text/html")



@app.route("/api/load-plot-previews", methods=["GET","POST"])
def generate_plot_previews():
    """
        This function expects a list of configJSONS coming from the frontend, representing all the plot configs
        for the template. It will then generate the HTML for each of these plots, and return them to the frontend
        to be displayed on the Preview Page.
    """

    config_json_list = request.get_json()

    try:
        with open(DEFAULT_DATA_PATH, 'r', encoding='utf-8') as data_file:
            data_json = json.load(data_file)
    except FileNotFoundError:
        print("File not Found")

    html_list = generate_plot_htmls(config_json_list,data_json)

    return Response(html_list, mimetype="text/html")



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
