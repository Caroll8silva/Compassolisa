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

describe("listing all rental", () => {
  
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

  it("Should be possible to list all rental", async () => {

    await supertest(app).post('/api/v1/rental/').send(rentalInformation);
    const response = await supertest(app).get('/api/v1/rental/');
  
    const { status } = response;
    expect(status).toBe(200);

  });
  it("Should be possible to give an error when listing sintax", async () => {

    const response = await supertest(app).get('/api/v1/renta');
  
    const { status } = response;
    expect(status).toBe(404);

  });
});
