/* eslint-disable no-undef */
const supertest = require('supertest');
const { resolve } = require('path');
const dotEnv = require('dotenv');
const app = require('../../infra/AppTest');

dotEnv.config({

  path: resolve(__dirname, '..', '.env.test')
});

describe("updating a person", () => {
    

  it("It should be possible to update a person", async () => {

    const response = await supertest(app).put('/api/v1/people/:id').send({
      nome: "joaozinho ciclano",
      cpf: "131.147.860-49",
      data_nascimento: "03/03/2021",
      email: "joazinho@email.com",
      senha: "123456",
      habilitado: "sim"
    });

    expect(response.status);
  });

});