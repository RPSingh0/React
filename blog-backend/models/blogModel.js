const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A blog must have a title'],
        maxlength: [100, 'A blog\'s title should not be more then 100 characters long']
    },
    shortDescription: {
        type: String,
        required: [true, 'A blog must have a short description for visitors to attract'],
        maxlength: [100, 'A blog\s short description should not be more then 100 characters long']
    },
    blogContent: {
        type: String,
        required: [true, 'Blog should have some text in it'],
        // minLength: [500, 'Blog should be of 500 characters or more'],
        trim: true
    },
    writtenBy: {
        required: true,
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    upVotes: {
        type: Number,
        default: 0
    },
    downVotes: {
        type: Number,
        default: 0
    },
    createdOn: {
        type: Date,
        default: Date.now()
    },
    lastUpdatedOn: {
        type: Date,
        default: Date.now()
    }
});

blogSchema.pre(/^find/, function (next) {
    /**
     * The 'this' keyword here, refers to the current query
     */
    this.populate({
        path: 'writtenBy',
        select: 'name avatar'
    });

    next();
})

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;