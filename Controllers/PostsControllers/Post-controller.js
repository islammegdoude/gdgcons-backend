const postModel = require('../../Models/posts-model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// const {setTokenCookie} = require('../middlewares/verifytoken.js')
require("dotenv").config();


async function createPost(req, res, next){
    const {id_post, id_user, content} = req.body;
      try {
        const createPost = {
          status: res.status(200) ? 'successful' : 'err server',
          data : await postModel.createPost(id_post, id_user, content),
        }
        res.json(login);
      } catch (error) {
        next(error);
      }  
  }

  async function getPosts(req, res, next){
    const {id_user} = req.body;
      try {
        const createPost = {
          status: res.status(200) ? 'successful' : 'err server',
          data : await postModel.createPost(id_user),
        }
        res.json(login);
      } catch (error) {
        next(error);
      } 
  }


  module.exports = {
    createPost,
    getPosts,
  };