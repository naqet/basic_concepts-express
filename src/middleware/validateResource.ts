import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodEffects, ZodError } from "zod";

const validateRequest =
	(schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
		(req: Request, res: Response, next: NextFunction) => {
			try {
				schema.parse(req.body);
				next();
			} catch (error) {
				if (error instanceof ZodError) {
					return res.status(400).send(error.errors);
				}
			}
		};

export default validateRequest;
