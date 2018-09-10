var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/database.js');
var app = express();
const port = process.env.PORT || 3002;

app.get('/restaurantInfo/:id', bodyParser.json(), db.findRestaurant);

app.listen(port, ()=>{
    console.log(' we listening for things');
})