const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');

router.post('/create', productController.create);
router.post('/update', productController.update);
router.post('/delete', productController.delete);
router.post('/change-status', productController.changeStatus);
router.get('/find',productController.findAll)
router.get('/', productController.findOne);

module.exports = router;
