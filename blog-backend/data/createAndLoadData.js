const fs = require('fs');
const mongoose = require('mongoose');
const User = require('../models/userModel');
const Blog = require('../models/blogModel');
const dotenv = require("dotenv");

// we have to set it up before running app, so that all variable are available there...
dotenv.config({
    path: './config.env'
});

// DB connection
const DB = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(c => {
    console.log('Connected to our DB!')
});

const Blogs = JSON.parse(fs.readFileSync(`${__dirname}/blog-backend.blogs.json`, 'utf-8'));
const Users = JSON.parse(fs.readFileSync(`${__dirname}/blog-backend.users.json`, 'utf-8'));

(async () => {
    try {
        await User.create(Users);
        console.log('Users added!');
        await Blog.create(Blogs);
        console.log('Blogs added!');
    } catch (error) {
        console.log(error);
    } finally {
        process.exit();
    }
})();