const express = require('express');
const router = express.Router();
const updateController = require('../Controllers/UpdateControllers/update-controller');

// createUpdate
router.post('/update/create', updateController.createUpdate);

// getUpdatesByUser
router.get('/posts/getUpdatesByUser' ,updateController.getUpdatesByUser);


module.exports = router;