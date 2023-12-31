const postModel = require('../../Models/posts-model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// const {setTokenCookie} = require('../middlewares/verifytoken.js')
require("dotenv").config();


async function createPost(req, res, next){
    const {id_user, content,id_bloc} = req.body;
      try {
        const createPost = {
          status: res.status(200) ? 'successful' : 'err server',
          data : await postModel.createPost(id_user, content,id_bloc),
        }
        res.json(createPost);
      } catch (error) {
        next(error);
      }  
  }

  async function getPosts(req, res, next){
    const {id_bloc} = req.body;
      try {
        const getPosts = {
          status: res.status(200) ? 'successful' : 'err server',
          data : await postModel.getPosts(id_bloc),
        }
        res.json(getPosts);
      } catch (error) {
        next(error);
      } 
  }


  module.exports = {
    createPost,
    getPosts,
  };