const catchAsync = require('../utils/catchAsync');
const Blog = require('../models/blogModel');

/**
 * This function will return all the blogs find in the DB
 */
exports.getAllBlogs = catchAsync(async (req, res, next) => {
    let blogs;
    // if there are query fields to get selective data
    if (req.query.fields) {
        const {fields} = req.query;
        blogs = await Blog.find().select(fields.split(',').join(' '));
    } else {
        blogs = await Blog.find().select('title shortDescription blogContent writtenBy upVotes downVotes createdOn lastUpdatedOn');
    }

    setTimeout(() => {

    res.status(200).json({
        status: 'success',
        results: blogs.length,
        data: {
            blogs: blogs
        }
    });
    }, 2000)
});

/**
 * This function will return a single blog by id
 */
exports.getBlog = catchAsync(async (req, res, next) => {
    const blog = await Blog.findById(req.params.id).select('title shortDescription blogContent writtenBy upVotes downVotes createdOn lastUpdatedOn');

    res.status(200).json({
        status: 'success',
        data: {
            blog: blog
        }
    });
});

/**
 * This function will create a blog and return the created blog
 */
exports.createBlog = catchAsync(async (req, res, next) => {
    const blog = await Blog.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            blog: blog
        }
    });
});