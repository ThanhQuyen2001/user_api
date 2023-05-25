const express = require('express');
const router = express.Router();

const configController = require('../app/controllers/ConfigController');

router.post('/create', configController.create);
router.post('/update', configController.update);
router.post('/delete', configController.delete);
router.get('/find',configController.findAll)
router.get('/', configController.findOne);

module.exports = router;
