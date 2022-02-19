/* eslint-disable no-undef */
const supertest = require('supertest');
const { resolve } = require('path');
const dotEnv = require('dotenv');
const app = require('../../../src/app');

dotEnv.config({

  path: resolve(__dirname, '..', '.env.test')
});

describe("listing a car", () => {
    

  it("It should be possible to list a car", async () => {

    const response = await supertest(app).get('/api/v1/car');

    expect(response.status).toBe(400);  });

});
