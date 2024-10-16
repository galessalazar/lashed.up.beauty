// creates new instance of express router-handles incoming requests
const router = require('express').Router();
// imports controller functions
const {
    getSingleClient,
    createBooking,
    updateBooking,
    deleteBooking     
} = require('../../controllers/user-controller');

// sets up crud
// sets up get route at /clients/:id/:clientName, when a get request hits this endpoint, it will invoke the getsingleclient function using id and clientname as route parameters
router.get('/clients/:id/:clientName', getSingleClient);
router.post('/bookings', createBooking);
router.put('/bookings/:id', updateBooking);
router.delete('/bookings/:id', deleteBooking);

module.exports = router;





