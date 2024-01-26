"""This file is the backend's entrypoint."""
import json
from flask import Flask, Response, request, send_file
from backend import load_templates, load_plots_from_template, return_docx, generate_plot_html
from backend import generate_plot_png
import os, re

app = Flask(__name__)

DEFAULT_GRAPH_INFO_PATH = 'src/mock.json'
DEFAULT_DATA_PATH = 'src/fixed.json'



def main():
    """Function to run the webserver"""
    app.run(host="0.0.0.0", port=7575, debug=True)


def load_indicators(filename: str) -> list[str]:
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

    data_json = unpack_data()

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


@app.route("/api/generate-doc", methods=['POST'])
def receive_template():
    """This endpoint is used to receive the template to be processed."""
    try:
        templates = load_templates()
        template_dict = request.get_json()
        templateID = template_dict['templateID']
        template = templates[templateID-1]
        template_name = template['Name']
        plots = load_plots_from_template(template)

        config_files = [plot['config_file'] for plot in plots]




        document_path = return_docx(config_files, unpack_data(), template_name)

        if not os.path.exists(document_path):
            return "File Not Found", 404


        return send_file(os.path.abspath(document_path), as_attachment=True)
    except Exception as e:
        print(f"Error:{e}")
        return "Error", 500

def unpack_data():
    """This is to reduce code repetition across functions"""
    try:
        with open(DEFAULT_DATA_PATH, 'r', encoding='utf-8') as data_file:
            data = json.load(data_file)

        if data is not None:
            return data
        else:
            raise ValueError("Data loaded is None")
    except FileNotFoundError:
        print("File not Found")
        raise

    except json.JSONDecodeError:
        print("Invalid Json file")
        raise


if __name__ == "__main__":
    main()
