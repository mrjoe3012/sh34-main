from argparse import ArgumentParser
from typing import Any
import sys
import json
from pathlib import Path
from backend import generate_plot_png

def check_file(string: str) -> bool:
   return Path(string).is_file()

def load_json(path: str) -> list[dict[str, Any]]:
    with open(path, 'r') as f:
       data = json.load(f)
    if type(data) == list:
       return data
    else:
       return [data]

def handle_arguments() -> dict[str, Any]:
    parser = ArgumentParser()
    parser.add_argument(
       "dataset", help="The path to the dataset to be loaded.",
       type=str
    )
    parser.add_argument(
       "config-file", help="The configuration file containing a single " \
            + "plot config or an array of plot configs.",
        type=str
    )
    args = parser.parse_args()
    dataset = args.dataset
    config_file = getattr(args, 'config-file')
    if not check_file(dataset) or not check_file(config_file):
       print("Bad arguments.")
       sys.exit(1)
    plots = load_json(config_file)
    with open(dataset, 'r') as f:
       dataset = json.load(f)
    return {
       'dataset' : dataset,
       'plots' : plots
    }

def main() -> int:
    args = handle_arguments()
    for plot in args['plots']:
        img, title = generate_plot_png(plot, args['dataset'])
        with open(f"{title}.png", 'wb') as f:
           f.write(img)
    print("Finished writing plots")
    return 0

if __name__ == "__main__":
   sys.exit(main()) 