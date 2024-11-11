// creates new instance of express router-handles incoming requests
const router = require("express").Router();
const authMiddleWare = require("../../middleware/authMiddleware");
const Bookings = require("../../models/Bookings");

// imports controller functions
const {
  createBooking,
  updateBooking,
  deleteBooking,
  getAllBookings,
  getBookingById,
} = require("../../controllers/bookings-controller");

// import middleware for authentication here when ready

router.get("/", authMiddleWare, getAllBookings);
router.get("/:id", authMiddleWare, getBookingById);
// allow public to book without login
router.post("/", createBooking);
router.put("/:id", authMiddleWare, updateBooking);
router.delete("/:id", authMiddleWare, deleteBooking);

module.exports = router;
