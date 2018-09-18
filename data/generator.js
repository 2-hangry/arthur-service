const faker = require('faker');
const fs = require('fs');
const path = require('path');
const promise = require('bluebird');
const db = require('../database/database.js');

const createRestObj = (i) => {
  const restObj = {
    id: i,
    name: faker.company.companyName(),
    url: `/restaurantInfo/${i}`,
    price: faker.random.arrayElement(['$', '$$', '$$$', '$$$$']),
    rating: faker.finance.amount(1, 5, 1),
    review_count: faker.random.number({ min: 10, max: 1000 }),
    phone: faker.phone.phoneNumberFormat(3),
    location: {
      address1: faker.address.streetAddress('###'),
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94109',
      country: 'US',
    },
    hours: [
      {
        open: [
          {
            end: faker.random.number({ min: 2000, max: 2230 }),
            day: 0,
            start: faker.random.number({ min: 630, max: 1030 }),
          },
          {
            end: faker.random.number({ min: 2000, max: 2230 }),
            day: 1,
            start: faker.random.number({ min: 630, max: 1030 }),
          },
          {
            end: faker.random.number({ min: 2000, max: 2230 }),
            day: 2,
            start: faker.random.number({ min: 630, max: 1030 }),
          },
          {
            end: faker.random.number({ min: 2000, max: 2230 }),
            day: 3,
            start: faker.random.number({ min: 630, max: 1030 }),
          },
          {
            end: faker.random.number({ min: 2000, max: 2230 }),
            day: 4,
            start: faker.random.number({ min: 630, max: 1030 }),
          },
          {
            end: faker.random.number({ min: 2000, max: 2230 }),
            day: 5,
            start: faker.random.number({ min: 630, max: 1030 }),
          },
          {
            end: faker.random.number({ min: 2000, max: 2230 }),
            day: 6,
            start: faker.random.number({ min: 630, max: 1030 }),
          },
        ],
      },
    ],
    categories: [
      {
        type: faker.random.arrayElement([
          'American',
          'Chinese',
          'Mexican',
          'Indonesian',
          'Mongolian',
          'Vietnamese',
        ]),
      },
    ],
    'From the Business': faker.lorem.paragraph(3),
    more_info: {
      'Has Soy-free Options': faker.random.boolean(),
      'Liked by Vegetarians': faker.random.boolean(),
      'Takes Reservations': faker.random.boolean(),
      Delivery: faker.random.boolean(),
      'Take-out': faker.random.boolean(),
      'Accepts Credit Cards': faker.random.boolean(),
      'Accepts Apple Pay': faker.random.boolean(),
      'Accepts Google Pay': faker.random.boolean(),
      'Good For': faker.random.arrayElement(['breakfast', 'lunch', 'dinner']),
      'Parking Street': faker.random.boolean(),
      'Bike Parking': faker.random.boolean(),
      'Wheelchair Accessible': faker.random.boolean(),
      'Good for Kids': faker.random.boolean(),
      'Good for Groups': faker.random.boolean(),
      'Attire Casual': faker.random.arrayElement(['casual', 'sloppy', 'fancy']),
      'Noise Level Average': faker.random.arrayElement(['quiet', 'average', 'loud']),
      Alcohol: faker.random.boolean(),
      'Outdoor Seating': faker.random.boolean(),
      'Wi-Fi': faker.random.boolean(),
      'Has TV': faker.random.boolean(),
      'Waiter Service': faker.random.boolean(),
      Caters: faker.random.boolean(),
      'Gender Neutral Restroom': faker.random.boolean(),
    },
  };
  return restObj;
};

const dataGen = (int) => {
  const dataArr = [];
  for (let i = 0; i < int; i++) {
    dataArr.push(createRestObj(i));
  }
  return dataArr;
};

let restaurantJSON = dataGen(100);
restaurantJSON = JSON.stringify(restaurantJSON);
const writeFile = promise.promisify(fs.writeFileSync);

writeFile('restaurant.txt', restaurantJSON, 'UTF8', (err) => {
  if (err) {
    console.log(' there was an err beitch', err);
  } else {
    console.log('complete creation');
  }
}).then(db.saveEverything());
