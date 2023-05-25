const express = require('express');
const router = express.Router();

const notificationController = require('../app/controllers/NotificationController');

router.post('/change-status', notificationController.changeStatus);
router.get('/find', notificationController.findAll)

module.exports = router;
