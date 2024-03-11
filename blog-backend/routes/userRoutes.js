const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

/**
 * Route: '/'
 * GET: This type of request will return all the users available
 */
router.route('/')
    .get(userController.getAllUsers);

/**
 * Route: '/:id'
 * GET: This type of request will return a single blog by id
 */
router.route('/:id')
    .get(userController.getUser);

/**
 * Route: '/create'
 * POST: This type of request will create a blog and return the created blog
 */
router.route('/create')
    .post(userController.createUser);

module.exports = router;