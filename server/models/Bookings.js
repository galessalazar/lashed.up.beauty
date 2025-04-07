const { Schema, model } = require("mongoose");

// defines the structure and rules for the Bookings collecting below
const BookingsSchema = new Schema({
  clientName: {
    type: String,
    required: true,
    // index: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  // future- add validation like regex
  clientPhone: {
    type: String,
    required: false,
  },
  serviceId: {
    type: Schema.Types.ObjectId,
    // this needs to match the services model name
    ref: "Services",
    required: true,
    // index: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  duration: {
    type: Number,
    // required: true,
  },
  // i never had the stupid date/time in here!!!
  dateTime: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// uses the schema to create the collection and will interact using crud, creating a model called Bookings
const Bookings = model("Bookings", BookingsSchema);

module.exports = Bookings;
