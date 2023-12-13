const express = require('express');
const router = express.Router();
const notificationController = require('../Controllers/NotificationsControllers/notification-controllers');

// createNotification (target("project" or "bloc"), id_project (int),id_bloc (int),description(string))
router.post('/notification/create', notificationController.createNotification);

// getAllNotifications (id_project (int) ,id_bloc (int))
router.get('/notification/getAllNotifications' ,notificationController.getAllNotifications);


module.exports = router;