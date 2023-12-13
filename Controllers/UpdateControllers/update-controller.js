const updateModel = require('../../Models/update-model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// const {setTokenCookie} = require('../middlewares/verifytoken.js')
require("dotenv").config();


async function createUpdate(req, res, next){
    const {target, id_project,id_bloc,description} = req.body;

      try {
        const createUpdate = {
          status: res.status(200) ? 'successful' : 'err server',
          data : await updateModel.createUpdate(target, id_project,id_bloc,description),
        }
        res.json(createUpdate);
      } catch (error) {
        next(error);
      }     
}

async function getUpdatesByUser(req, res, next){
    const {id_project,id_bloc} = req.body;
    try {
        const getUpdatesByUser = {
          status: res.status(200) ? 'successful' : 'err server',
          data : await updateModel.getUpdatesByUser(id_project,id_bloc),
        }
        res.json(getUpdatesByUser);
      } catch (error) {
        next(error);
      }
}

module.exports = {
    createUpdate,
    getUpdatesByUser,
  };