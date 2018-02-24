const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3004;
const db = require('../db/model.js');
mongoose.connect('mongodb://localhost/images');

app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/images', function(req, res) {
  console.log('REQS', req);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});