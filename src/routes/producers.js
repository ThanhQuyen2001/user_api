const express = require('express');
const router = express.Router();

const producerController = require('../app/controllers/ProducerController');

router.post('/create', producerController.create);
router.post('/update', producerController.update);
router.post('/delete', producerController.delete);
router.get('/find',producerController.findAll)
router.get('/', producerController.findOne);

module.exports = router;
