// need to expand this to full crud

const router = require('express').Router();
const Service = require('../../models/Services');
const {
    getSingleService
} = require('../../controllers/services-controller');

router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
