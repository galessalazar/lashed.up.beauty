// need to expand this to full crud

const router = require('express').Router();
const {
    getSingleService
} = require('../../controllers/services-controller');

router.get('/services', getSingleService);

module.exports = router;
