require('dotenv').config();
require('./db/mongoose');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const auth = require('./routes/authentication');
const app = express();

const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
const db = mongoose.connection;

// handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('connection to database is successful\n')});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/authentication/signup', auth.signup);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
