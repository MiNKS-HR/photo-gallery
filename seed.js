const mongoose = require('mongoose');
const data = require('./seed-data.js');
const request = require('request');
const Images = require('./db/model.js');
mongoose.connect('mongodb://localhost:3004/images');

var seedDb = function(data) {
  for (var i = 0; i < data.length; i++) {
    var saved = {
      id: data[i].id,
      url: data[i].url,
      description: data[i].description
    };

    Images.insertOne(saved, (err, result) => {
      if (err) {
        console.log('Seed.js says "That ain\'t right..."', err);
      } else {
        console.log('SAVED!', result);
      }
    });
  }
  mongoose.connection.close();
};

seedDb(data);