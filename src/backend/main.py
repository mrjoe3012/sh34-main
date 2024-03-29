"""This file is the backend's entrypoint."""
import json
from flask import Flask, Response, request, make_response
from backend import (load_templates, load_plots_from_template, return_docx, generate_plot_html,
                     add_template, add_plot, generate_plot_json, generate_plot_jsons)


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


@app.route("/api/get-plot-json", methods=["GET","POST"])
def generate_plotly_json():
    """
        Generates a plotly json representation of a
        plot using the config_json.
    """

    config_json = request.get_json()

    with open(DEFAULT_DATA_PATH, 'r', encoding='utf-8') as data_file:
        data_json = json.load(data_file)

    plot_json = generate_plot_json(config_json, data_json)
    return Response(plot_json, mimetype="text/json")


@app.route("/api/load-plot-previews", methods=["GET","POST"])
def generate_plot_previews():
    """
        On the frontend, a list of configJSONS for each
        plot gets sent to this endpoint. This function then
        generates JSON object representations for each configJSON it
        received. It then sends this list of JSON representations
        back to the frontend, where using a Plotly library it
        generates the plot back on the frontend. The reason I
        have chose to do it this way, if I instead sent a list
        of HTML representations of the plots, I would have to call
        dangerouslySetInnerHTML to get the plot to appear, a
        vulnerable way to set the content.
    """

    config_json_list = request.get_json()

    try:
        with open(DEFAULT_DATA_PATH, 'r', encoding='utf-8') as data_file:
            data_json = json.load(data_file)
    except FileNotFoundError:
        print("File not Found")

    json_list = generate_plot_jsons(config_json_list,data_json)

    return Response(json_list, mimetype="text/json")


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
        template_id = template_dict['templateID']
        template = templates[template_id-1]
        template_name = template['Name']
        plots = load_plots_from_template(template)

        config_files = [plot['config_file'] for plot in plots]
        document_bytes = return_docx(config_files, unpack_data())
        response = make_response(document_bytes)
        response.headers.set(
        'Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
        response.headers.set(
        'Content-Disposition', 'attachment', filename = f"{template_name}.docx")
        return response

    except FileNotFoundError as e:
        print(f"File Not Found:{e}")
        return "File Not Found Error", 500
    except PermissionError as e:
        print(f"Permission Denied: {e}")
        return "Permission Denied", 500
    except OSError as e:
        print(f"OS Error: {e}")
        return "OS Error", 500

def unpack_data():
    """This is to reduce code repetition across functions"""
    try:
        with open(DEFAULT_DATA_PATH, 'r', encoding='utf-8') as data_file:
            data = json.load(data_file)

        if data is None:
            raise ValueError("Data loaded is None")
        return data
    except FileNotFoundError:
        print("File not Found")
        raise

    except json.JSONDecodeError:
        print("Invalid Json file")
        raise

@app.route('/api/add-template', methods=['POST'])
def add_template_route():
    """
    Receives json data for a new template,
    and calls the functions to add the template
    to the database, and returns a response
    """
    data = request.json
    name = data.get('Name')
    description = data.get('Description')
    tags = data.get('Tags')

    # Validate Data

    document = add_template(name,description,tags)
    response = Response(json.dumps(document))
    response.headers.set('Content-Type', 'application/json')
    return response

@app.route('/api/add-plot', methods=['POST'])
def add_plot_route():
    """
    Receives json data for a new Plot,
    and calls the functions to add the Plot
    to the database, and returns a response
    """
    data = request.json
    template_id = data['template_id']
    config_file = data['config_file']
    plot = add_plot(template_id, config_file)
    response = Response(json.dumps(plot))
    response.headers.set("Content-Type", "application/json")
    return response

if __name__ == "__main__":
    main()
