from flask import Flask, jsonify
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = Flask(__name__)
CORS(app)

# not securing for demo purposes 
# should be kept in .env 
uri = "mongodb+srv://sanjay:sanjay@cluster0.p6dxnhv.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi('1'))
db = client.newdb  

print(db)

@app.route('/listings')
def get_listings():
    listings_collection = db.listings  
    listings = list(listings_collection.find({}))
    for listing in listings:
        listing["_id"] = str(listing["_id"])  
    print(listings)
    return jsonify(listings)


if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0')
