import requests

def makeAPIcall(url):
    # make API call
    request = requests.get(url)
    request.context
    request.text
    return request.json()

def retrieveWeapons()
    with open("countries.txt", "r") as f:
    countries = [line.strip() for line in f]

makeAPIcall("")