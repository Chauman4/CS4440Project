import pandas as pd
from pymongo import MongoClient
import json
import os

def importdata():
    client = MongoClient("mongodb://localhost:27017")
    db = client["lacollisions"]
    collisionsdata = db["collisionsdata"]
    df = pd.read_csv("collisiondata/collisiondata/traffic-collision-data-from-2010-to-present.csv")
    print(len(df["Address"].unique()))
    df["Address"] = df["Address"].apply(lambda x: " ".join(x.split()))
    df["Cross Street"] = df["Cross Street"].apply(lambda x: " ".join(x.split()))
    print(len(df["Address"].unique()))
    print(len(df["DR Number"].unique()))
    df = df.drop_duplicates(subset=["DR Number"])
    print(len(df["DR Number"]))
    numpyarray = pd.Series(df["Location"]).apply(eval)
    print(numpyarray)
    ###.values.reshape(404804, 1)
    dataframe = pd.DataFrame(numpyarray.tolist(), columns=['latitude', 'longitude'])
    df[['latitude', 'longitude']] = dataframe
    ###df[['latitude', 'longitude']] = dict(df["Location"].values.reshape(404804, 1))
    jsondata = json.loads(df.to_json(orient='records'))
    collisionsdata.insert_many(jsondata)
    cleandata()
    df.to_csv("data.csv", sep=",", encoding="utf-8")
    makelocationid(df["Address"])

def cleandata():
    client = MongoClient("mongodb://localhost:27017")
    db = client["lacollisions"]
    collisionsdata = db["collisionsdata"]
    columnnames = ["DR Number", "Date Occurred", "Time Occurred", "Area Name", "Victim Age",
                   "Victim Sex", "Victim Descent", "Address", "Cross Street",
                   "Location", "Zip Codes"]
    for columnname in columnnames:
        columnquery = {columnname: None}
        delete = collisionsdata.delete_many(columnquery)
        print("Number of documents deleted that had null", columnname, ":", delete.deleted_count)

def makelocationid(dfaddress):
    client = MongoClient("mongodb://localhost:27017")
    db = client["lacollisions"]
    locationsidsdata = db["locationids"]
    addresslist = dfaddress.unique()
    numberlist = list(range(0, len(addresslist)))
    locationiddata = {'locationid': numberlist, 'address': addresslist}
    df = pd.DataFrame(data=locationiddata)
    jsondata = json.loads(df.to_json(orient='records'))
    locationsidsdata.insert_many(jsondata)
    """
    db.collisionsdata.aggregate([{
        "$lookup": {
            "from": "locationids",
            "localField": "Address",
            "foreignField": "address",
            "as": "collisionsdata.locationID"
        }
    }])

    find = db.collisionsdata.find()
    streetaddresslist = []
    streetaddressclosed = []
    count = 0
    for result in find:
        streetaddress = " ".join(result["Address"].split())
        if streetaddress not in streetaddressclosed:
            streetaddresslist.append([count, streetaddress])
            streetaddressclosed.append(streetaddress)
            count = count + 1
            print(count)
            """

importdata()