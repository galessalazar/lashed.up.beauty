require('dotenv').config();

// this sets up a basic express.js server for a node.js app

const express = require('express');
// path is a built in node.js module
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes/api/index');

const app = express();
const PORT = process.env.PORT || 3001;

// this is used with forms/ submits gets sent in this URLencoded format
app.use(express.urlencoded({ extended: true }));
// this uses json 
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.use(routes);

db.once('open', () => {
app.listen(PORT, () => 
    console.log(`Now listenting on http://localhost:${PORT}`));
});


