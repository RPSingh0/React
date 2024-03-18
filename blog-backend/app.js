const express = require('express')
const cors = require('cors');
const blogRouter = require('./routes/blogRoutes');
const swagger = require('./swaggerConfig');
const globalErrorHandler = require('./utils/errorHandler');

/**
 * The main entrypoint `app` variable for application
 */
const app = express();

app.use(cors());
swagger(app);

app.use(express.json())

/**
 * Path:
 * /api/v1/blogs will be routed to blogRouter
 */
app.use('/api/v1/blog', blogRouter);

app.use(globalErrorHandler);

module.exports = app;