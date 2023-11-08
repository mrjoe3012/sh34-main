from backend import generate_graph
import sys, json

def main():
    if len(sys.argv) != 2:
        print("Please specify a json file")
        sys.exit(1)
    with open(sys.argv[1]) as f:
        data = json.load(f)
    print(generate_graph(data))