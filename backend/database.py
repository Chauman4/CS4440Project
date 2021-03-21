import pandas as pd
from pymongo import MongoClient
import json
import os

def importdata():
    client = MongoClient("mongodb://localhost:27017")
    db = client["lacollisions"]
    collisionsdata = db["collisionsdata"]
    df = pd.read_csv("collisiondata/traffic-collision-data-from-2010-to-present.csv")
    jsondata = json.loads(df.to_json(orient='records'))
    collisionsdata.insert_many(jsondata)

importdata()