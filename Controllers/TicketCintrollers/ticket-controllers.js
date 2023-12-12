const ticketModel = require('../../Models/ticket-model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// const {setTokenCookie} = require('../middlewares/verifytoken.js')
require("dotenv").config();


  async function createTicket(req, res, next){
    const {id_user, problem,} = req.body;

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

  async function getTicketsByUser(req, res, next){
  }

  async function getTicketById(req, res, next){

  }

  module.exports = {
    createTicket,
    getTicketsByUser,
    getTicketById,
  };