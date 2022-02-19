/* eslint-disable no-undef */
const supertest = require('supertest');
const { resolve } = require('path');
const dotEnv = require('dotenv');
const app = require('../../infra/AppTest');

dotEnv.config({

  path: resolve(__dirname, '..', '.env.test')
});

describe("listing a person", () => {
    

  it("It should be possible to list a person", async () => {

    const response = await supertest(app).get('/api/v1/people');

    expect(response.status);
  });
 
});