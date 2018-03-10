const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('Database HELLA connected');
})

const imageSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  url: String,
  description: String
});

const ImageModel = mongoose.model('Image', imageSchema);

function findAll (callback) {
  ImageModel.find({}).sort('+id').exec(callback);
}

function insertOne (story, callback) {
  ImageModel.create(story, callback);
}

const insertMany = (image, callback) => {
  ImageModel.insertMany(image, callback);
}

exports.findAll = findAll;
exports.insertOne = insertOne;
exports.insertMany = insertMany;
exports.imageSchema = imageSchema;