const { Services } = require("../models");

module.exports = {
  async getSingleService(req, res) {
    const { id } = req.params;
    try {
      const foundService = await Services.findById(id);

      if (!foundService) {
        return res.status(404).json({ message: "Cannot find service" });
      }

      res.json(foundService);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error occured while fetching service" });
    }
  },
};
