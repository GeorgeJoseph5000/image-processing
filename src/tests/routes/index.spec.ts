import app from '../../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Server api/image endpoint', () => {
  it('responds with OK status', async () => {
    const response = await request.get('/api/image');
    expect(response.status).toBe(200);
  });

  it('returns an image without modifications', async () => {
    const response = await request.get('/api/image?filename=fjord');
    expect(response.status).toBe(200);
  });

  it('returns a resized image', async () => {
    const response = await request.get('/api/image?filename=fjord&width=200&height=200');
    expect(response.status).toBe(200);
  });

  it('returns 404 when image does not exist', async () => {
    // Invalid filename
    const response = await request.get('/api/image?filename=fjor');
    expect(response.status).toBe(404);
  });
});
