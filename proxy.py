from flask import Flask, Response, request, jsonify
import json

app = Flask(__name__)


@app.route('/savelist', methods = ["POST"]) 
def savelist():
    list_tosave =request.json
    savefile = open("mylist.txt", "w")
    savefile.write(json.dumps(list_tosave))

    res = Response('')

    return res

@app.route('/getlist')
def restorelist():
    savefile = open("mylist.txt", "r")
    memory = savefile.read()
    res = Response(json.dumps(memory))
    res.headers = {'Content-Type':'application/json'}
    return res

app.run(debug=True, port=5001)