import express, { NextFunction, Request, Response } from 'express';
import routes from '../routes';
import errorHandler from '../middleware/errorHandler';
import cookieHandler from '../middleware/cookieHandler';

export default function createServer() {
  const app = express();

  // Parse JSON
  app.use(express.json());

  // Cookie handler
  app.use(cookieHandler());

  // Routes
  routes(app);

  // Error handler
  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    errorHandler(err, res);
  });

  return app;
}
