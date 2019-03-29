const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const database = mongoose.connect(process.env.DB_HOST);

module.exports = database;
