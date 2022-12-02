import supertest from 'supertest';
import createServer from '../../utils/server';

const app = createServer();

describe('Users route', () => {
  describe('/', () => {
    describe('GET', () => {
      it('returns 401 when unauthorized', async () => {
        await supertest(app).get('/users').expect(401);
      });
    });
  });
});
