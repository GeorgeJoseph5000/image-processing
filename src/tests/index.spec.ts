import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api/image endpoint', async () => {
    const response = await request.get('/api/image');
    expect(response.status).toBe(200);
  });
});
