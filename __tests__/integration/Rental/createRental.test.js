/* eslint-disable no-undef */
const supertest = require('supertest');
const rentalSchema = require('../../../src/app/schema/rental');
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
  
describe("creating a rental", () => {
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

  it("Should be possible to create a rental", async () => {
    
    const response = await supertest(app).post('/api/v1/rental/')
      .send(rentalInformation);
      
    const { status } = response;
    expect(status).toBe(201);
  });
  it("Should return error if user does not submit all required data", async () => {

    const incompleteInformation = {
      nome: "Localiza Rent a Car",
      cnpj: "16.670.085/0001-55",
      atividades: "Aluguel de Carros E Gestão de Frotas"
    };

    const response = await supertest(app).post('/api/v1/people/')
      .send(incompleteInformation);
      
    const { status } = response;
    expect(status).toBe(400);
  });
});
