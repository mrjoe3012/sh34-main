"""This file is the backend's entrypoint."""
import json
from flask import Flask
from backend import generate_graph

app = Flask(__name__)

DEFAULT_GRAPH_INFO_PATH = 'src/mock.json'
DEFAULT_DATA_PATH = 'src/fixed.json'

def main():
    """Function to run the webserver"""
    app.run(host="localhost", port=7575, debug=True)

@app.route("/", methods=["GET", "POST"])
def hello_world():
    """Test function for flask endpoint"""
    try:
        with open(DEFAULT_GRAPH_INFO_PATH, 'r', encoding='utf-8') as graph_info_file:
            graph_info = json.load(graph_info_file)
        with open(DEFAULT_DATA_PATH, 'r', encoding='utf-8') as data_file:
            data = json.load(data_file)
    except FileNotFoundError:
        return "File not found.", 404  # Return a 404 error if the file is not found
    html = generate_graph(graph_info, data)
    return html


if __name__ == "__main__":
    main()
