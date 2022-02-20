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


describe("listing a rental", () => {
  
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

  it("Should be possible to list a rental", async () => {
    
    const { text } = await supertest(app).post('/api/v1/rental/').send(rentalInformation);
    const { _id } = JSON.parse(text);
    const response = await supertest(app).get(`/api/v1/rental/${_id.toString()}`);
    
    const { status } = response;
    expect(status).toBe(200);
  });

  it("Should be possible to give an error when listing", async () => { 
    
    const { text } = await supertest(app).post('/api/v1/rental/').send(rentalInformation);
    const { _id } = JSON.parse(text);
    const response = await supertest(app).get(`/api/v1/reental/${_id.toString()}`);

    const { status } = response;
    expect(status).toBe(404);

  });


});