const express = require('express');
const logger = require('morgan');
const usersRouter = require('./routes/users.route');
const helmet = require('helmet');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

// Router section
app.use('/api/users', usersRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: err});
});

module.exports = app;
