require("dotenv").config();
const mongoose = require("mongoose");
// EXPRESS SERVER

// this sets up a basic express.js server for a node.js app

const express = require("express");
// path is a built in node.js module
const path = require("path");

// /must place prior to any routes or it wont work
const app = express();
// this is used with forms/ submits gets sent in this URLencoded format
app.use(express.urlencoded({ extended: true }));
// this parses to  json
app.use(express.json());

const authRoutes = require("./routes/api/auth");
app.use("/api/auth", authRoutes);
const clientRoutes = require("./routes/api/client-routes");
const bookingRoutes = require("./routes/api/bookings-routes");
const serviceRoutes = require("./routes/api/services-routes");

app.use("/api/clients", clientRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/services", serviceRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../client/dist')));


  // for any route that doesnt match my API routes, this serves the react app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

const db = require("./config/connection");
// const routes = require("./routes/api/index");

// starts the server
const PORT = process.env.PORT || 5000;

db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Now listenting on http://localhost:${PORT}`)
  );
});
