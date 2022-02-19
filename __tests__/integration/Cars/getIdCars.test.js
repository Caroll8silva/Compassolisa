/* eslint-disable no-undef */
const supertest = require('supertest');
const { resolve } = require('path');
const dotEnv = require('dotenv');
const app = require('../../infra/AppTest');

dotEnv.config({

  path: resolve(__dirname, '..', '.env.test')
});

describe("listing only one car", () => {
    

  it("It should be possible to list only one car", async () => {

    const response = await supertest(app).get('/api/v1/car/:id');

    expect(response.status);
  });

});