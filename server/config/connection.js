const mongoose = require("mongoose");
require("dotenv").config({ path: "./server/.env" });

console.log(
  "MongoDB URI:",
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lashed_up_beauty"
);

// establishes connection to ATLAS or local

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lashed_up_beauty",
    {
      // avoids the deprecation warning when using MONGODB URIs
      useNewUrlParser: true,
      //   improves server discovery and monitoring for better performance
      useUnifiedTopology: true,
    }
  )

  //   handles success or failure
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

module.exports = mongoose.connection;
