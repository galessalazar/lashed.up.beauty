const mongoose = require('mongoose');
require('dotenv').config({path: './server/.env'});

console.log('MongoDB URI:', process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lashed_up_beauty');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lashed_up_beauty')

module.exports = mongoose.connection;