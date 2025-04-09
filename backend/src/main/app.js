const express = require('express');
const logger = require('morgan');
const usersRouter = require('./routes/users.route');
const helmet = require('helmet');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

// Router section
app.use('/api/users', usersRouter);

app.use(errorMiddleware);

module.exports = app;
