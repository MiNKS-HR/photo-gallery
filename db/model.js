const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3004/images');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Database HELLA connected');
});

const imageSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  url: String,
  description: String
});

const ImageModel = mongoose.model('Image', imageSchema); 

function findAll(callback) {
  ImageModel.find({}, callback);
}

function insertOne(story, callback) {
  ImageModel.create(story, callback);
}

exports.findAll = findAll;
exports.insertOne = insertOne;