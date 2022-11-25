import { Express } from 'express';
import healthcheckRoute from './healthcheck';
import userRoute from './users';
import postRoute from './posts';
import commentRoute from './comments';
import authRoute from './auth';
import authValidator from '../middleware/authValidator';

export default function routes(app: Express) {
  app.use('/healthcheck', healthcheckRoute);
  app.use('/users', authValidator(), userRoute);
  app.use('/posts', authValidator(), postRoute);
  app.use('/comments', authValidator(), commentRoute);
  app.use('/auth', authRoute);
}
