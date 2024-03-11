const express = require('express')
const cors = require('cors');
const blogRouter = require('./routes/blogRoutes');
const userRouter = require('./routes/userRoutes');

/**
 * The main entrypoint `app` variable for application
 */
const app = express();

app.use(cors());

app.use(express.json())

/**
 * Path:
 * /api/v1/blogs will be routed to blogRouter
 */
app.use('/api/v1/blogs', blogRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;