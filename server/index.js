var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/database.js');
var app = express();
const port = process.env.PORT || 3002;

app.use(express.static(__dirname + '/../client/public'));

app.get('/restaurantInfo/:id', bodyParser.json(), db.findRestaurant);

app.listen(port, ()=>{
  console.log(__dirname, ' the directory name');
  console.log(' we listening for things');
});

