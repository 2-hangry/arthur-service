const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/database.js');

const router = express.Router();

const app = express();
const port = process.env.PORT || 3002;

app.use('/restaurantInfo-service/:id', express.static(`${__dirname}/../client/public`));
app.use('/api/businesses/', router);
app.use(cors());

app.get('*/:id/restaurantInfo*', bodyParser.json(), (req, res) => {
  const restaurantID = Number(req.params.id);
  db.findRestaurant(restaurantID, (err, restaurantInfo) => {
    if (err) {
      res.status(500).send(' There was an err, ', err);
    } else {
      res.send(restaurantInfo);
    }
  });
});

app.listen(port, () => {
  console.log(' we listening for things');
});
