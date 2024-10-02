import request from 'supertest';
import { app, server } from './main';

afterAll(() => {
    server.close(); // Close the server after tests to release the port
  });
  describe('API Endpoints', () => {
    it('should return sum of 1 and 2 on /api/sum', async () => {
      const response = await request(app).get('/api/sum');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ res: 3 });
    });
    it('should return multiply of 1 and 2 on /api/multiply', async () => {
      const response = await request(app).get('/api/multiply');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ res: 2 });
    });
  });