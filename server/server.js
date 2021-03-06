const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3004;
const DB_ADDRESS = process.env.DB_ADDRESS || localhost;

const db = require('../db/model.js');

mongoose.connect(`mongodb://${DB_ADDRESS}/images`);

app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/images', (req, res) => {
  db.findAll((err, results) => {
    if (err) {
      console.log('story err', err);
    } else {
      // console.log('this sucks...', results)
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
