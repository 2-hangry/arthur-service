const mongoose = require('mongoose');
const data = require('../database/database.js');
const fs = require('fs');
const path = require('path');
const promise = require('bluebird');
const rawPath = path.join(__dirname + '/../restaurant.txt');
let readFile = promise.promisify(fs.readFile);


mongoose.connect('mongodb://student:student1@ds149742.mlab.com:49742/restaurants');

let restaurantSchema = {   "id": {type:Number, unique: true},
"name": {type:String},
"url": {type:String},
"price": {type:String},
"rating": {type:Number},
"review_count": {type:Number},
"phone": {type:String},
"location": {
    "address1": {type:String},
    "city": {type:String},
    "state": {type:String},
    "zip_code": {type:Number},
    "country": {type:String}
  },
"hours": [
  {
    "open": [
      {
        "end": {type:Number},
        "day": {type: Number},
        "start": {type: Number}
      },
      {
        "end": {type: Number},
        "day": {type: Number},
        "start": {type: Number}
      },
      {
        "end": {type: Number},
        "day": {type: Number},
        "start": {type: Number}
      },
      {
        "end": {type: Number},
        "day": {type: Number},
        "start": {type: Number}
      },
      {
        "end": {type: Number},
        "day": {type: Number},
        "start": {type: Number}
      },
      {
        "end": {type: Number},
        "day": {type: Number},
        "start": {type: Number}
      },
      {
        "end": {type: Number},
        "day": {type: Number},
        "start": {type: Number}
      }
    ]
  }
],
"categories": [
  {
    "type": {type:String},
  }
],
"From the Business": {type:String},
"more_info": {
    "Has Soy-free Options": {type: Boolean},
    "Liked by Vegetarians": {type: Boolean},
    "Takes Reservations": {type: Boolean},
    "Delivery": {type: Boolean},
    "Take-out": {type: Boolean},
    "Accepts Credit Cards": {type: Boolean},
    "Accepts Apple Pay": {type: Boolean},
    "Accepts Google Pay": {type: Boolean},
    "Good For": {type:String},
    "Parking Street":{type: Boolean},
    "Bike Parking":{type: Boolean},
    "Wheelchair Accessible": {type: Boolean},
    "Good for Kids": {type: Boolean},
    "Good for Groups": {type: Boolean},
    "Attire Casual": {type:String},
    "Noise Level Average": {type:String},
    "Alcohol": {type: Boolean},
    "Outdoor Seating":{type: Boolean},
    "Wi-Fi": {type: Boolean},
    "Has TV": {type: Boolean},
    "Waiter Service": {type: Boolean},
    "Caters": {type: Boolean},
    "Gender Neutral Restroom": {type: Boolean}
}
}

let restaurant = mongoose.model('restaurant', restaurantSchema);

console.log(data.readFile)