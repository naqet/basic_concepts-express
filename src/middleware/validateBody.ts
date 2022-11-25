import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodEffects, ZodError } from 'zod';

const validateBody = (schema: AnyZodObject | ZodEffects<AnyZodObject>) => (req: Request, res: Response, next: NextFunction): void => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ status: 'error', errors: error.errors });
    }
  }
};

export default validateBody;
