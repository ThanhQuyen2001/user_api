const express = require('express');
const router = express.Router();

const orderController = require('../app/controllers/OrderController');

router.post('/create', orderController.create);
router.post('/update', orderController.update);
router.post('/delete', orderController.delete);
router.post('/change-status', orderController.changeStatus);
router.get('/find',orderController.findAll)
router.get('/', orderController.findOne);

module.exports = router;
