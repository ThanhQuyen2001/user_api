const express = require('express');
const router = express.Router();

const voucherController = require('../app/controllers/VoucherController');

router.post('/create', voucherController.create);
router.post('/update', voucherController.update);
router.post('/delete', voucherController.delete);
router.get('/find',voucherController.findAll)
router.get('/', voucherController.findOne);

module.exports = router;
