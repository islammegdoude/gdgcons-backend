const express = require('express');
const router = express.Router();
const usersController = require('../Controllers/UserControllers/user-controller');

// login
router.post('/user/login', usersController.login);

// register
router.post('/user/register' ,usersController.register);


module.exports = router;