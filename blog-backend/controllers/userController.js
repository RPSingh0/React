const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');

/**
 * This function get all the users present in DB
 */
exports.getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find().select('name email avatar profession');

    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users: users
        }
    });
});

/**
 * This function will return a single user by id
 */
exports.getUser = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.params.id).select('name email avatar profession');

    res.status(200).json({
        status: 'success',
        data: {
            user: user
        }
    });
});

/**
 * This function will return a single user by email
 */
exports.getUserByEmail = catchAsync(async (req, res, next) => {
    const user = await User.find({email: req.params.email}).select('name email avatar profession');

    res.status(200).json({
        status: 'success',
        data: {
            user: user
        }
    });
});

/**
 * This function will create and return the created user
 */
exports.createUser = catchAsync(async (req, res, next) => {
    const user = await User.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            user: user
        }
    })
});
