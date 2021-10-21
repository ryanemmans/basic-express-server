'use strict';

const { db } = require('../src/models');
const app = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(app.app); // app.server? server.server? app.app?

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

xdescribe('Testing our Server', () => {
  it('Should fetch all foods on GET to /food', async () => {
    const response = await request.get('/food');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0);
  });
  it('Should CREATE and add a record to the database', async () => {
    const response = await request.post('/food');

    expect(response.status).toBe(200);
  });
  it('Should UPDATE a specific record in the database', async () => {
    const response = await request.put('/food/1');

    expect(response.status).toBe(200);
  });
  it('Should DELETE a specific record in the database.', async () => {
    const response = await request.delete('/food/1');

    expect(response.status).toBe(200);
  });
  it('Should reject PATCH requests', async () => {
    const response = await request.patch('/');

    expect(response.status).toBe(404);
  });
});
