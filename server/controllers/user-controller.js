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
  
};

  