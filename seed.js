const data = require('./seed-data.js');
const mongoose = require('mongoose');
const Images = require('./db/model.js');
const dbAddress = process.env.DB_ADDRESS || 'localhost';
//mongoose.connect('mongodb://localhost/images');
mongoose.connect(`mongodb://${dbAddress}/images`);
const request = require('request');


var seedDb = function(data) {

  // for (var i = 0; i < data.length; i++) {
  //   {console.log('DATAAAAA', data[i])}
  //   var saved = {
  //     id: data[i].id,
  //     url: data[i].url,
  //     description: data[i].description
  //   };

  //   Images.insertOne(saved, (err, result) => {
  //     if (err) {
  //       console.log('Seed.js says "That ain\'t right..."', err);
  //     } else {
  //       console.log('SAVED!', result);
  //       if (i === (data.length - 1)) {
  //         mongoose.disconnect();
  //       }
  //     }
  //   });
  // }

  Images.insertMany(data, (err, res) => {
    if (err) {
      console.log('Did not insert many :(', err)
      mongoose.disconnect();
    } else {
      console.log('done!');
      mongoose.disconnect();
    }
  });

};

seedDb(data);