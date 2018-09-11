const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const promise = require('bluebird');
const rawPath = path.join(__dirname + '/../restaurant.txt');
let readFile = promise.promisify(fs.readFile);


mongoose.connect('mongodb://student:student1@ds149742.mlab.com:49742/restaurants');

let restaurantSchema = { 'id': {type: Number, unique: true},
  'name': {type: String},
  'url': {type: String},
  'price': {type: String},
  'rating': {type: Number},
  'review_count': {type: Number},
  'phone': {type: String},
  'location': {
    'address1': {type: String},
    'city': {type: String},
    'state': {type: String},
    'zip_code': {type: Number},
    'country': {type: String}
  },
  'hours': [
    {
      'open': [
        {
          'end': {type: Number},
          'day': {type: Number},
          'start': {type: Number}
        },
        {
          'end': {type: Number},
          'day': {type: Number},
          'start': {type: Number}
        },
        {
          'end': {type: Number},
          'day': {type: Number},
          'start': {type: Number}
        },
        {
          'end': {type: Number},
          'day': {type: Number},
          'start': {type: Number}
        },
        {
          'end': {type: Number},
          'day': {type: Number},
          'start': {type: Number}
        },
        {
          'end': {type: Number},
          'day': {type: Number},
          'start': {type: Number}
        },
        {
          'end': {type: Number},
          'day': {type: Number},
          'start': {type: Number}
        }
      ]
    }
  ],
  'categories': [
    {
      'type': {type: String},
    }
  ],
  'From the Business': {type: String},
  'more_info': {
    'Has Soy-free Options': {type: Boolean},
    'Liked by Vegetarians': {type: Boolean},
    'Takes Reservations': {type: Boolean},
    'Delivery': {type: Boolean},
    'Take-out': {type: Boolean},
    'Accepts Credit Cards': {type: Boolean},
    'Accepts Apple Pay': {type: Boolean},
    'Accepts Google Pay': {type: Boolean},
    'Good For': {type: String},
    'Parking Street': {type: Boolean},
    'Bike Parking': {type: Boolean},
    'Wheelchair Accessible': {type: Boolean},
    'Good for Kids': {type: Boolean},
    'Good for Groups': {type: Boolean},
    'Attire Casual': {type: String},
    'Noise Level Average': {type: String},
    'Alcohol': {type: Boolean},
    'Outdoor Seating': {type: Boolean},
    'Wi-Fi': {type: Boolean},
    'Has TV': {type: Boolean},
    'Waiter Service': {type: Boolean},
    'Caters': {type: Boolean},
    'Gender Neutral Restroom': {type: Boolean}
  }
};

let restaurant = mongoose.model('restaurant', restaurantSchema);


//reads the created restaurant file
//manually run the function in order to push all objects into the mongo database
let saveEverything = () => {
  readFile(rawPath, 'utf8').then((contents) => {
    let jsonArr = JSON.parse(contents);
    for (var i = 0; i < jsonArr.length; i++) {
      let rest = new restaurant(jsonArr[i]);
      rest.save((err) => {
        console.log(err, ' there was an error');
      });
    }
  });
  //asynchronous call
};

//uncomment the function and run in order to populate the database
// saveEverything();

let findRestaurant = (req, res) => {
  let restaurantID = Number(req.params.id);
  restaurant.findOne({id: restaurantID}, (err, restaurantInfo) => {
    if (err) {
      res.status(500).send(' There was an err, ', err);
    } else {
      res.send(restaurantInfo);
    }
  });
};


module.exports.findRestaurant = findRestaurant;