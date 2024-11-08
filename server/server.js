require("dotenv").config();
const mongoose = require("mongoose");
// EXPRESS SERVER

// this sets up a basic express.js server for a node.js app

const express = require("express");
// path is a built in node.js module
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes/api/index");

const app = express();
// should i update this port to 5000? why?
const PORT = process.env.PORT || 5000;

// this is used with forms/ submits gets sent in this URLencoded format
app.use(express.urlencoded({ extended: true }));
// this uses json
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
}

const clientRoutes = require("./routes/api/client-routes");
const bookingRoutes = require("./routes/api/bookings-routes");
const serviceRoutes = require("./routes/api/services-routes");

app.use("/api/clients", clientRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/services", serviceRoutes);

db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Now listenting on http://localhost:${PORT}`)
  );
});
