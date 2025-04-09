const { ZodError } = require('zod');

function errorMiddleware(err, req, res, next) {
  let status = err.status || 500;
  let message = 'Duplicate key error';
  let details = null;

  if (err instanceof ZodError) {
    status = 400;
    message = 'Incorrect input data';
    details = err.errors.map(e => e.message);
  }

  res.status(status).json({
    status,
    message,
    ...(details && { details }),
  });
}

module.exports = errorMiddleware;
