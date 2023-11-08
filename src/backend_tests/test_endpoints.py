import json, requests, hashlib, os
from pathlib import Path

SRC_PATH = Path(__file__).parent.parent
MOCK_JSON_PATH = SRC_PATH.joinpath("mock.json")
SERVER_URL = "http://127.0.0.1:7575"
ARTIFACTS_PATH = SRC_PATH.joinpath("test_artifacts")

def setup_module():
    if not ARTIFACTS_PATH.exists():
        os.makedirs(ARTIFACTS_PATH)

def test_plot_generation_endpoint():
    plot_generation_url = "/"
    output_path = ARTIFACTS_PATH.joinpath(f"{test_plot_generation_endpoint.__name__}_request_content.html")
    with open(MOCK_JSON_PATH, 'r') as f:
        data = json.load(f)
    request = requests.post(
        SERVER_URL + plot_generation_url,
        json=data
    )
    with open(output_path, 'w') as f:
        f.write(request.text)
    assert request.status_code == 200
