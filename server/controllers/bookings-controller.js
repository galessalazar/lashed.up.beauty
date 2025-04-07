// creates a new booking
const mongoose = require("mongoose");
const Bookings = require("../models/Bookings");
const Services = require("../models/Services");

// makes createBooking available for use in other files like routes
module.exports = {
  // marks function as asynchronous (represents HTTP client submitted data, represents HTTP response)
  async createBooking(req, res) {
    console.log("incoming booking data:", req.body);
    try {
      // extract/ destructure properties from req.body
      const { serviceId, dateTime, clientName, clientEmail, clientPhone } =
        req.body;

      // checks if serviceId exists in services collection
      const service = await Services.findById(serviceId);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }

      const booking = new Bookings({
        // this saves the actual objectid
        serviceId: service._id,
        dateTime,
        clientName,
        clientEmail,
        clientPhone,
      });

      // save the booking
      await booking.save();
      // sends back the created booking
      res.status(201).json(booking);
    } catch (err) {
      console.error("Error details", err);
      if (err.name === "ValidationError") {
        return res
          .status(400)
          .json({ message: "Validation error", error: err });
      }
      res.status(500).json({ message: "Error creating booking", error: err });
    }
  },

  // Retrieves all bookings
  async getAllBookings(req, res) {
    try {
      // retrieves all bookings and populate the service names fields in dashboard using mongoose method populate
      const bookings = await Bookings.find().populate(
        "serviceId",
        "serviceName"
      );
      res.status(200).json(bookings);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error getting bookings" });
    }
  },

  // get a booking by id

  async getBookingById(req, res) {
    const { id } = req.params;
    try {
      // wait for booking to be found then populates the serviceId field w id and name
      const booking = await Bookings.findById(id).populate(
        "serviceId",
        "serviceName"
      );
      if (!booking) {
        return res
          .status(400)
          .json({ message: "Cannot find a booking with this id" });
      }
      res.status(200).json(booking);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error retrieving booking" });
    }
  },
  // update a booking by id
  async updateBooking(req, res) {
    // extracts route paramaters from URL, with this we exract the id from URL
    const { id } = req.params;
    try {
      const updateBooking = await Bookings.findByIdAndUpdate(id, req.body, {
        // updates the updated document instead of the old one, important
        new: true,
        // forces Mongoose to run schema validation rules, like if a valid email is required 
        runValidators: true,
      });
      if (!updateBooking) {
        return res
          .status(404)
          .json({ message: "Cannot find a booking with this id " });
      }
      res.json(updateBooking);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Error updating booking" });
    }
  },
  // delete a booking by id
  async deleteBooking(req, res) {
    const { id } = req.params;
    try {
      const deleteBooking = await Bookings.findByIdAndDelete(id);
      if (!deleteBooking) {
        return res
          .status(400)
          .json({ message: "Cannot find a booking with this id" });
      }
      res.json({ message: "Booking deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error deleting booking" });
    }
  },
};
