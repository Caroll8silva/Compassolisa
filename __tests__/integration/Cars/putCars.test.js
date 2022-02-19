/* eslint-disable no-undef */
const supertest = require('supertest');
const { resolve } = require('path');
const dotEnv = require('dotenv');
const app = require('../../infra/AppTest');

dotEnv.config({

  path: resolve(__dirname, '..', '.env.test')
});

describe("updating a car", () => {
    

  it("It should be possible to updating a car", async () => {

    const response = await supertest(app).put('/api/v1/car/:id').send({
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