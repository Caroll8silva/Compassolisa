/* eslint-disable no-undef */
const supertest = require('supertest');
const { resolve } = require('path');
const dotEnv = require('dotenv');
const app = require('../../../src/app');

dotEnv.config({

  path: resolve(__dirname, '..', '.env.test')
});

describe("listing only one person", () => {
    

  it("It should be possible to list only one person", async () => {

    const response = await supertest(app).get('/api/v1/people/:id');

    expect(response.status);
  });

});