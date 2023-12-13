const express = require('express');
const router = express.Router();
const notificationController = require('../Controllers/NotificationsControllers/notification-controllers');

// createPost
router.post('/notification/create', notificationController.createNotification);

// getPosts
router.get('/notification/getAllNotifications' ,notificationController.getAllNotifications);


module.exports = router;