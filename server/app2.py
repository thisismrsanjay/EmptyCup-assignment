from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)

#enabling for all routes one can change it to specific routes 
CORS(app)


@app.route('/listings')
def get_listings():
    listings = [
        {
            "name": "New Epic Designs",
            "rating": 1.5,
            "projects": 57,
            "years": 8,
            "price": "$$",
            "phone_numbers": ["+91 - 9845322853", "+91 - 9845322854"],
            "shortlisted": False
        },
        {
            "name": "Studio D3",
            "rating": 4.5,
            "projects": 43,
            "years": 6,
            "price": "$$$",
            "phone_numbers": ["+91 - 9845322853", "+91 - 9845322854"],
            "shortlisted": False
        },
        {
            "name": "House of Design",
            "rating": 4,
            "projects": 80,
            "years": 8,
            "price": "$$",
            "phone_numbers": ["+91 - 9845322853", "+91 - 9845322854"],
            "shortlisted": False
        },
    ]
    return jsonify(listings)

if __name__ == '__main__':
    app.run(debug=True)