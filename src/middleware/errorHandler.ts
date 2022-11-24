import { Response } from 'express';
import BaseError from '../utils/baseError';
import logger from '../utils/logger';

const errorHandler = (err: Error, res: Response) => {
  if (err instanceof BaseError) {
    res.status(err.statusCode).send({
      status: 'error',
      statusCode: err.statusCode,
      message: err.message,
    });
    return;
  }

  logger.error(err.message);
  res.status(500).send({
    status: 'error',
    statusCode: 500,
    message: 'Internal server error',
  });
};

export default errorHandler;
