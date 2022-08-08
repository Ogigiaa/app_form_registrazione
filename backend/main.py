from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import redis

app = Flask(__name__)
CORS(app)

@app.route("/redis/keys", methods=['GET'])
def redis_keys():
    r = redis.Redis(host='localhost', port=6379, db=0, password='root')
    chiavi = r.keys('*')
    chiavi = [ k.decode('utf-8') for k in chiavi]
    r.close()
    return jsonify(chiavi)

@app.route("/redis/set/<key>/<value>", methods=['GET'])
def redis_set(key,value):
    r = redis.Redis(host='localhost', port=6379, db=0, password='root')
    r.set(key, str(value))
    r.close()
    return 'Ok'

@app.route("/redis/get/<key>", methods=['GET'])
def redis_get(key):
    r = redis.Redis(host='localhost', port=6379, db=0, password='root')
    outcome = r.get(key)
    r.close()
    return outcome