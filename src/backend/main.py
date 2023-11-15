"""This file is the backend's entrypoint."""

from flask import Flask, request
from backend import generate_graph

app = Flask(__name__)

def main():
    """Function to run the webserver"""
    app.run(host="localhost", port=7575, debug=True)

@app.route("/", methods=["GET", "POST"])
def hello_world():
    """Test function for flask endpoint"""
    html = generate_graph(request.json)
    return html


if __name__ == "__main__":
    main()
