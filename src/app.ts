import * as dotenv from 'dotenv';
import logger from './utils/logger';
import createServer from './utils/server';

dotenv.config();

const app = createServer();

app.listen(process.env.PORT || 1337, () => {
  logger.info('App is running');
});
