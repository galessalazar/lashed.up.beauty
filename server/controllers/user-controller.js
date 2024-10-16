const { Bookings } = require("../models");

module.exports = {
  // get the client by id or name
  async getSingleClient(req, res) {
    const { id, clientName } = req.params;

    try {
      const foundClient = await Bookings.findOne({
        $or: [{ _id: id }, { clientName: clientName }],
      });

      if (!foundClient) {
        return res.status(404).json({ message: "Cannot find client " });
      }

      res.json(foundClient);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Error occured while retrieving client" });
    }
  },

  // gets all clients

  async getAllClients(req, res) {
    try {
      const foundAllClients = await Bookings.find();
      res.json(foundAllClients);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error retrieving clients' });
    }
  },
  // creates a new booking
  async createBooking(req, res) {
    try {
      const booking = await Bookings.create(req.body);
      res.status(201).json(booking);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Error creating booking" });
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
            return res.status(400).json({ message: 'Cannot find a booking with this id' });
        }
        res.json({ message: 'Booking deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting booking' });
    }
  },
};
