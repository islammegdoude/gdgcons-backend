const userModel = require('../../Models/posts-model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// const {setTokenCookie} = require('../middlewares/verifytoken.js')
require("dotenv").config();


async function createPost(req, res, next){
    const {id, email, password,role } = req.body;
      try {
        const login = {
          status: res.status(200) ? 'successful' : 'err server',
          data : await userModel.register(full_name, email, encryptedPassword, token,role),
        }
        res.json(login);
      } catch (error) {
        next(error);
      }  
  }

  async function getPosts(req, res, next){
 
  }


  module.exports = {
    createPost,
    getPosts,
  };