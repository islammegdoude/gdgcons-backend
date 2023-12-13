const express = require('express');
const router = express.Router();
const notificationController = require('../Controllers/NotificationsControllers/notification-controllers');

// createNotification
router.post('/notification/create', notificationController.createNotification);

// getAllNotifications
router.get('/notification/getAllNotifications' ,notificationController.getAllNotifications);


module.exports = router;