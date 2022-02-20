/* eslint-disable no-undef */
const supertest = require('supertest');
const rentalSchema = require("../../../src/app/schema/rental");
const peopleSchema = require("../../../src/app/schema/people");
const app = require('../../infra/AppTest');


beforeAll(async () => {

  await rentalSchema.deleteMany();
  await peopleSchema.deleteMany();
});

beforeEach(async () => {

  await rentalSchema.deleteMany();
  await peopleSchema.deleteMany();
});

describe("updating a rental", () => {
  const rentalInformation = {
    nome: "Localiza Rent a Car",
    cnpj: "16.670.085/0001-55",
    atividades: "Aluguel de Carros E Gestão de Frotas",
    endereco: [ 
      {
        cep: "96200-200",
        number:"1234",
        isFilial: false
      }  
    ]
  };

  const updateInformation = {
    nome: "Localiza Car",
    cnpj: "16.670.087/0001-55",
    atividades: "Aluguel E Gestão de Frotas",
    endereco: [ 
      {
        cep: "96200-200",
        number:"1234",
        isFilial: false
      }  
    ]
  };

  it("Should be possible to updating a rental", async () => {

    const { text } = await supertest(app).post('/api/v1/rental/').send(rentalInformation);
    const { _id } = JSON.parse(text);
    await supertest(app).get('/api/v1/rental/');
    const response = await supertest(app).put(`/api/v1/rental/${_id.toString()}`).send(updateInformation);;

    const { status } = response;
    expect(status).toBe(200);
  });

  it("Should be possible to give error when updating", async () => {

    const { text } = await supertest(app).post('/api/v1/rental/').send(rentalInformation);
    const { _id } = JSON.parse(text);
    await supertest(app).get('/api/v1/rental/');
    const response = await supertest(app).put(`/api/v1/rentall/${_id.toString()}`).send(updateInformation);;

    const { status } = response;
    expect(status).toBe(404);

  });

});