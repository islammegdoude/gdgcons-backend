const userModel = require('../../Models/ticket-model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// const {setTokenCookie} = require('../middlewares/verifytoken.js')
require("dotenv").config();


  async function createTicket(req, res, next){
    
  }

  async function getTicketsByUser(req, res, next){
  }

  async function getTicketById(req, res, next){

  }

  module.exports = {
    createTicket,
    getTicketsByUser,
    getTicketById,
  };