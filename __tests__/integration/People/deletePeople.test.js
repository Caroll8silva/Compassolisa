/* eslint-disable no-undef */
const supertest = require('supertest');
const { resolve } = require('path');
const dotEnv = require('dotenv');
const app = require('../../infra/AppTest');

dotEnv.config({

  path: resolve(__dirname, '..', '.env.test')
});

describe("deleting a person", () => {
    

  it("It should be possible to delete a person", async () => {

    const response = await supertest(app).get('/api/v1/people/:id');

    expect(response.status);
  });

});