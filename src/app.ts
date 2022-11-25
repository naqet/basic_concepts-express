import * as dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import logger from './utils/logger';
import routes from './routes';
import errorHandler from './middleware/errorHandler';
import cookieHandler from './middleware/cookieHandler';

dotenv.config();

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

app.listen(process.env.PORT || 1337, () => {
  logger.info('App is running');
});
