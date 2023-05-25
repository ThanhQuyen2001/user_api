const express = require('express');
const router = express.Router();

const importController = require('../app/controllers/ImportController');

router.post('/create', importController.create);
router.post('/update', importController.update);
router.post('/delete', importController.delete);
router.get('/find',importController.findAll)
router.get('/', importController.findOne);

module.exports = router;
