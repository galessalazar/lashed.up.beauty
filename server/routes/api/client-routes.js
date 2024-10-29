const router = require('express').Router();
const { getAllClients, getSingleClient } =  require ('../../controllers/user-controller');

router.get('/', getAllClients);
router.get('/:id/clientName', getSingleClient);
module.exports = router;