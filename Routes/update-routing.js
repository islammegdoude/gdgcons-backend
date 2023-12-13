const express = require('express');
const router = express.Router();
const updateController = require('../Controllers/UpdateControllers/update-controller');

// createUpdate (target("project" or "bloc"), id_project (int),id_bloc (int),description(string))
router.post('/update/create', updateController.createUpdate);

// getUpdatesByUser (id_project (int) ,id_bloc (int))
router.get('/posts/getUpdatesByUser' ,updateController.getUpdatesByUser);


module.exports = router;