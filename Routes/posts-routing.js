const express = require('express');
const router = express.Router();
const postsController = require('../Controllers/PostsControllers/Post-controller');

// createPost
router.post('/posts/create', postsController.createPost);

// getPosts
router.get('/posts/getPosts' ,postsController.getPosts);


module.exports = router;