const mongoose = require('mongoose');
require('dotenv').config({path: './server/.env'});

console.log('MongoDB URI:', process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lashed_up_beauty');

// establishes connection to atlas when the app starts

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lashed_up_beauty', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

module.exports = mongoose.connection;