const userModel = require('../../Models/update-model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// const {setTokenCookie} = require('../middlewares/verifytoken.js')
require("dotenv").config();


async function createUpdate(req, res, next){
    
}

async function getUpdatesByUser(req, res, next){
    
}

module.exports = {
    createUpdate,
    getUpdatesByUser,
  };