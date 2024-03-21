const express = require('express');
const blogRouter = express.Router();

const {createBlog,getBlog,deleteBlog} = require('../controllers/blog')

blogRouter.post('/create-blog', createBlog)
blogRouter.get('/get-blog/:id',getBlog);
blogRouter.post('/delete-blog/:id',deleteBlog)

module.exports = blogRouter;