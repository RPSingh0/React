const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

/**
 * Route: '/'
 * GET: This type of request will return all the blogs available
 */
router.route('/')
    .get(blogController.getAllBlogs);

/**
 * Route: '/:id'
 * GET: This type of request will a single blog based on id
 */
router.route('/:id')
    .get(blogController.getBlog);

/**
 * Route: '/create'
 * POST: This type of request will create a blog in DB and return the created blog
 */
router.route('/create')
    .post(blogController.createBlog);

module.exports = router;