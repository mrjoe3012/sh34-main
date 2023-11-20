"""
Here the tests to test plotly_interface exist. 
"""
import sys
import json
from backend import generate_graph

# Are we going to be passing loaded json files in
# to plotly_interface or not. Code needs to be mended if not.
def main():
    """
    Attempts to read two json files, paths specified by cli
    and then generates the corresponding graph.
    """
    if len(sys.argv) != 3:
        print("Please specify 2 json files")
        sys.exit(1)
    with open(sys.argv[1], encoding="utf-8") as f:
        graph_info = json.load(f)
    with open(sys.argv[2], encoding="utf-8") as f:
        data = json.load(f)
    generate_graph(graph_info,data)

if __name__ == "__main__":
    main()
