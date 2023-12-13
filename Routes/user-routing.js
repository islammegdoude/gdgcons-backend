const express = require('express');
const router = express.Router();
const usersController = require('../Controllers/UserControllers/user-controller');

// login send (email, password)
router.post('/user/login', usersController.login);

// register send (email, password, name, phone, full_name, role, id_project, id_bloc, id_lot, etage, type)
router.post('/user/register' ,usersController.register);


module.exports = router;