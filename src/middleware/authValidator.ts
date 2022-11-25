import { NextFunction, Request, Response } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import BaseError from '../utils/baseError';

const authValidator = () => (_req: Request, res: Response, next: NextFunction) => {
  try {
    const token = res?.locals?.cookie?.token;

    jwt.verify(token, process.env.JWT_SECRET as jwt.Secret, (err: VerifyErrors | null, decoded: any) => {
      if (err) throw new BaseError(401);
      res.locals.user = decoded;
    });

    next();
  } catch (err) {
    next(err);
  }
};

export default authValidator;
