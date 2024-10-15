// creates new instance of an express router
const router = require('express').Router();
const bookingsRoutes = require('./bookings-routes');
const servicesRoutes = require('./services-routes');

router.use('/bookings', bookingsRoutes);
router.use('/services', servicesRoutes);

module.exports = router;