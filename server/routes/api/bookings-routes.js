// creates new instance of express router-handles incoming requests
const router = require("express").Router();



// imports controller functions
const {
 
  createBooking,
  updateBooking,
  deleteBooking,
  getAllBookings,
  getBookingById
} = require("../../controllers/bookings-controller");

// import middleware for authentication here when ready



router.get("/", getAllBookings);
router.get('/:id', getBookingById);
router.post("/", createBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;
