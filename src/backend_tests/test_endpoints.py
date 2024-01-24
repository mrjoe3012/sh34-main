"""
Expects the backend to already be running. Will query the backend for a graph and
test that the output is correct.
"""
import json
import os
from pathlib import Path
import requests

SRC_PATH = Path(__file__).parent.parent
MOCK_JSON_PATH = SRC_PATH.joinpath("mock.json")
SERVER_URL = "http://127.0.0.1:7575"
ARTIFACTS_PATH = SRC_PATH.joinpath("test_artifacts")

def setup_module():
    """
    Runs before tests, ensures that test artifacts can be output.
    """
    if not ARTIFACTS_PATH.exists():
        os.makedirs(ARTIFACTS_PATH)

# def test_plot_generation_endpoint():
#     """
#     Tests the plot generation endpoint by sending a post
#     request to it with some json data.
#     """
#     plot_generation_url = "/"
#     output_path = ARTIFACTS_PATH.joinpath(
#         f"{test_plot_generation_endpoint.__name__}_request_content.html"
#     )
#     with open(MOCK_JSON_PATH, 'r', encoding="utf-8") as f:
#         data = json.load(f)
#     request = requests.post(
#         SERVER_URL + plot_generation_url,
#         json=data,
#         timeout=10
#     )
#     with open(output_path, 'w', encoding="utf-8") as f:
#         f.write(request.text)
#     assert request.status_code == 200
