const userModel = require('../../Models/update-model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// const {setTokenCookie} = require('../middlewares/verifytoken.js')
require("dotenv").config();


async function createUpdate(req, res, next){
    const {target, id_project,id_bloc} = req.body;

      try {
        const createTicket = {
          status: res.status(200) ? 'successful' : 'err server',
          data : await ticketModel.createTicket(id_user, problem,"on progress"),
        }
        res.json(createTicket);
      } catch (error) {
        next(error);
      }     
}

async function getUpdatesByUser(req, res, next){
    
}

module.exports = {
    createUpdate,
    getUpdatesByUser,
  };