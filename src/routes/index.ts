import { Express } from 'express';
import healthcheckRoute from './healthcheck';
import userRoute from './user';
import postRoute from './post';
import commentRoute from './comment';
import authRoute from './auth';
import authValidator from '../middleware/authValidator';

export default function routes(app: Express) {
  app.use('/healthcheck', healthcheckRoute);
  app.use('/user', authValidator(), userRoute);
  app.use('/post', authValidator(), postRoute);
  app.use('/comment', authValidator(), commentRoute);
  app.use('/auth', authRoute);
}
