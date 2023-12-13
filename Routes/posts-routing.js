const express = require('express');
const router = express.Router();
const postsController = require('../Controllers/PostsControllers/Post-controller');

// createPost (id_user(int), content(string), id_bloc(int))
router.post('/posts/create', postsController.createPost);

// getPosts (id_bloc(int))
router.get('/posts/getPosts' ,postsController.getPosts);


module.exports = router;