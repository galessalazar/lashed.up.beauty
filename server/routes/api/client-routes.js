// sets up crud
// sets up get route at /clients/:id/:clientName, when a get request hits this endpoint, it will invoke the getsingleclient function using id and clientname as route parameters
// router.get("/clients", getAllClients);
// router.get("/clients/:id/:clientName", getSingleClient);

const router = require('express').Router();
const { getAllClients, getSingleClient } =  require ('../../controllers/user-controller');

router.get('/', getAllClients);
router.get('/:id/clientName', getSingleClient);
module.exports = router;