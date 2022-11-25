import { Response } from 'express';
import BaseError from '../utils/baseError';
import logger from '../utils/logger';

const errorHandler = (err: Error, res: Response) => {
  if (err instanceof BaseError) {
    if (err.message) {
      res.status(err.statusCode).send({
        message: err.message,
      });
    } else {
      res.sendStatus(err.statusCode);
    }

    return;
  }

  logger.error(err.message);
  res.sendStatus(500);
};

export default errorHandler;
