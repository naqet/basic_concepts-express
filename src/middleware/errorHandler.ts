import { Response } from 'express';
import BaseError from '../utils/baseError';
import logger from '../utils/logger';

const errorHandler = (err: Error, res: Response) => {
  if (err instanceof BaseError) {
    res.status(err.statusCode).send({
      message: err.message,
    });
    return;
  }

  logger.error(err.message);
  res.status(500).send({
    message: 'Internal server error',
  });
};

export default errorHandler;
