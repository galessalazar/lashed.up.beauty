const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
