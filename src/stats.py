import requests

def makeAPIcall(url):
    # make API call
    request = requests.get(url)
    request.context
    request.text
    return request.json()


makeAPIcall("")