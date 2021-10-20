'use strict';

const app = require('../src/server.js');
const supertest = require('supertest');

const request = supertest(app.app); // server.server? app.app?

describe('Testing our Server', () => {
  it('Should respond with an object on GET to /person', async () => {
    const response = await request.get('/person?name=x');

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('x');
    expect(typeof response.body).toBe('object');
    expect(response.body).toMatchObject({ name: 'x' });
  });
  it('Should reject POST requests', async () => {
    const response = await request.post('/');

    expect(response.status).toBe(404);
  });
  it('Should reject PUT requests', async () => {
    const response = await request.put('/');

    expect(response.status).toBe(404);
  });
  it('Should reject PATCH requests', async () => {
    const response = await request.patch('/');

    expect(response.status).toBe(404);
  });
  it('Should reject DELETE requests', async () => {
    const response = await request.delete('/');

    expect(response.status).toBe(404);
  });
});
