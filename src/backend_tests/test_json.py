import json, requests, sys

def main():
    if len(sys.argv) != 2:
        print("please specify JSON file")
        sys.exit(1)


    filename = sys.argv[1]
    with open(filename, "r") as f:
        json_file = json.load(f)
    r = requests.post('http://127.0.0.1:7575/', json=json_file)
    print("Request had code "+ str(r.status_code))
    
