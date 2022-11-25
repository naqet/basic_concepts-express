import { NextFunction, Request, Response } from 'express';
import BaseError from '../utils/baseError';

type ValidateParams = {
  [key: string]: string;
};

const validateParams = (params: ValidateParams) => (req: Request, _res: Response, next: NextFunction) => {
  try {
    Object.entries(params).forEach(([param, type]) => {
      switch (type) {
        case 'number':
          if (Number.isNaN(parseInt(req.params[param], 10))) throw new BaseError(400, 'Invalid params');
          break;
        default:
          break;
      }
    });
    next();
  } catch (err) {
    next(err);
  }
};

export default validateParams;
