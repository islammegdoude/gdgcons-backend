const notificationModel = require('../../Models/notification-model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// const {setTokenCookie} = require('../middlewares/verifytoken.js')
require("dotenv").config();


async function createNotification(req, res, next){
    const {target, id_project,id_bloc,description} = req.body;

      try {
        const createNotification = {
          status: res.status(200) ? 'successful' : 'err server',
          data : await notificationModel.createNotification(target, id_project,id_bloc,description),
        }
        res.json(createNotification);
      } catch (error) {
        next(error);
      }     
}

async function getAllNotifications(req, res, next){
    const {id_project,id_bloc} = req.body;
    try {
        const getAllNotifications = {
          status: res.status(200) ? 'successful' : 'err server',
          data : await notificationModel.getAllNotifications(id_project,id_bloc),
        }
        res.json(getAllNotifications);
      } catch (error) {
        next(error);
      }
}

module.exports = {
    createNotification,
    getAllNotifications,
  };