// will load env variables from .env to process.env
require("dotenv").config();

const mongoose = require("mongoose");
// EXPRESS SERVER

// this sets up a basic express.js server for a node.js app

const express = require("express");

// path is built in node.js
const path = require("path");

// /must place prior to any routes or it wont work
const app = express();

// middleware used with forms/ submits, parses data coming in through HTTP requests
app.use(express.urlencoded({ extended: true }));
// {allows parsing of objs and arrays, if false, only allows key value pairs}

// middleware, receive a string format, you can parse into an obj or array to work w/in code, then makes it accessible in req.body
app.use(express.json());

// import routes and logic found at...
const authRoutes = require("./routes/api/auth");
const clientRoutes = require("./routes/api/client-routes");
const bookingRoutes = require("./routes/api/bookings-routes");
const serviceRoutes = require("./routes/api/services-routes");

// tells express to use the authRoutes for any requests that begin with /api/auth URL path
app.use("/api/auth", authRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/services", serviceRoutes);

// set conditional for environment, production, development or test
if (process.env.NODE_ENV === "production") {
  require("dotenv").config({ path: path.resolve(__dirname, ".env") });
  // method used to create file path to .env

  // path.join method used to safely join parts of a file path across differing op systems
  app.use(express.static(path.join(__dirname, "../client/dist")));
} else {
  require("dotenv").config({ path: path.resolve(__dirname, ".env.local") });
}

// for any route that doesnt match my API routes(incoming obj, outgoing obj)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// import connection setup for db
const db = require("./config/connection");

// PORT will hold the value of the port # app will listen on = in production || in development, this keeps from having to modify
const PORT = process.env.PORT || 5000;

// start server after successful connection to db
db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Now listenting on http://localhost:${PORT}`)
  );
});
