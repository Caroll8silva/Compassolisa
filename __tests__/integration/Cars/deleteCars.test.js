/* eslint-disable no-undef */
const supertest = require('supertest');
const { resolve } = require('path');
const dotEnv = require('dotenv');
const app = require('../../infra/AppTest');

dotEnv.config({

  path: resolve(__dirname, '..', '.env.test')
});

describe("deleting a car", () => {
    

  it("It should be possible to delete a car", async () => {

    const response = await supertest(app).delete('/api/v1/car/:id');

    expect(response.status);
  });

});