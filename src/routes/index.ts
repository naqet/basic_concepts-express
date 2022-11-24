import { Express } from 'express';
import healthcheckRoute from './healthcheck';
import userRoute from './user';
import postRoute from './post';
import commentRoute from './comment';

export default function routes(app: Express) {
  app.use('/healthcheck', healthcheckRoute);
  app.use('/user', userRoute);
  app.use('/post', postRoute);
  app.use('/comment', commentRoute);
}
