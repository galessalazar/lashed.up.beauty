// creates a new booking
const { Bookings } = require("../models");

module.exports = {
  async createBooking(req, res) {
    console.log("incoming booking data:", req.body);
    try {
      const booking = await Bookings.create(req.body);
      res.status(201).json(booking);
    } catch (err) {
      console.error('Error details', err);
      if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Validation error', error: err });
      }
      res.status(500).json({ message: "Error creating booking", error: err });
    }
  },

  // Retrieves all bookings
  async getAllBookings(req, res) {
    try {
      // retrieves all bookings and populate the service names fields in dashboard using mongoose method populate
      const bookings = await Bookings.find().populate('serviceName');
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
      const booking = await Bookings.findById(id);
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
    const { id } = req.params;
    try {
      const updateBooking = await Bookings.findByIdAndUpdate(id, req.body, {
        new: true,
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
