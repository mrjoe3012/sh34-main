from backend import generate_graph, data_extract , plotly_interface
import sys, json


#Are we going to be passing loaded json files in to plotly_interface or not. Code needs to be mended if not.
def main():
    if len(sys.argv) != 3:
        print("Please specify 2 json files")
        sys.exit(1)
    with open(sys.argv[1]) as f:
        graph_info = json.load(f)
    with open(sys.argv[2]) as f:
        data = json.load(f)
    generate_graph(graph_info,data)
    
    



if __name__ == "__main__": main()