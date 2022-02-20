/* eslint-disable no-undef */
const supertest = require('supertest');
const peopleSchema = require("../../../src/app/schema/people");
const app = require('../../infra/AppTest');


beforeAll(async () => {
  await peopleSchema.deleteMany();
});

beforeEach(async () => {

  await peopleSchema.deleteMany();
});
  
describe("creating a people", () => {
  const peopleInformation = {
    nome: "joaozinho ciclano",
    cpf: "131.147.860-49",
    data_nascimento: "03/03/2000",
    email: "joazinho@email.com",
    senha: "123456",
    habilitado: "sim"
    
  };
  it("Should be possible to create a people", async () => {
    
    const response = await supertest(app).post('/api/v1/people/')
      .send(peopleInformation);
      
    const { status } = response;
    expect(status).toBe(201);
  });
  it("Should return error if user does not submit all required data", async () => {

    const incompleteInformation = {
      nome: "joaozinho ciclano",
      data_nascimento: "03/03/2000",
      email: "joazinho123@email.com"
    };

    const response = await supertest(app).post('/api/v1/people/')
      .send(incompleteInformation);
      
    const { status } = response;
    expect(status).toBe(400);
  });
});
