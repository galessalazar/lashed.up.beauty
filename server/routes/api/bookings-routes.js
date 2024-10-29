// creates new instance of express router-handles incoming requests
const router = require("express").Router();



// imports controller functions
const {
  getSingleClient,
  getAllClients,
  createBooking,
  updateBooking,
  deleteBooking,
  getAllBookings,
  getBookingById
} = require("../../controllers/bookings-controller");

// import middleware for authentication here when ready

// sets up crud
// sets up get route at /clients/:id/:clientName, when a get request hits this endpoint, it will invoke the getsingleclient function using id and clientname as route parameters
router.get("/clients", getAllClients);
router.get("/clients/:id/:clientName", getSingleClient);
// i likely need to add this GETALLBOOKINGS UP TOP
router.get("/", getAllBookings);
router.get('/:id', getBookingById);
router.post("/", createBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;
