/* eslint-disable no-undef */
const supertest = require('supertest');
const { resolve } = require('path');
const dotEnv = require('dotenv');
const app = require('../../../src/app');

dotEnv.config({

  path: resolve(__dirname, '..', '.env.test')
});

describe("creating a car", () => {
    

  it("It should be possible to create a car", async () => {

    const response = await supertest(app).post('/api/v1/car').send({
      modelo: 'GM S10 2.8',
      cor: 'branco',
      ano: '2021',
      acessorios: [
        { descricao: 'Ar-condicionado' },
        { descricao: 'Dir. Hidráulica' },
        { descricao: 'Cabine Dupla' },
        { descricao: 'Tração 4x4' },
        { descricao: '4 portas' },
        { descricao: 'Diesel' },
        { descricao: 'Air bag' },
        { descricao: 'ABS' }
      ],
      quantidadePassageiros: 5
    });

    expect(response.status);
  });

});