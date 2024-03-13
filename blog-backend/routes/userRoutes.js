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
 * GET: This type of request will return a single user by id
 */
router.route('/:id')
    .get(userController.getUser);

/**
 * Route: '/email/:email'
 * GET: This type of request will return a single user by email
 */
router.route('/email/:email')
    .get(userController.getUserByEmail);

/**
 * Route: '/create'
 * POST: This type of request will create a user and return the created user
 */
router.route('/create')
    .post(userController.createUser);

module.exports = router;