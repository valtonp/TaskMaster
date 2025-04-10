const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const errorMiddleware = require('./middlewares/error.middleware');

const usersRouter = require('./routes/users.route');
const tasksRouter = require('./routes/tasks.route');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

// Router section
app.use('/api/tasks', tasksRouter);
app.use('/api/users', usersRouter);

app.use(errorMiddleware);

module.exports = app;
