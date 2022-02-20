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


describe("listing a person", () => {
  const peopleInformation = {
    nome: "joaozinho ciclano",
    cpf: "131.147.860-49",
    data_nascimento: "03/03/2000",
    email: "joazinho@email.com",
    senha: "123456",
    habilitado: "sim"
  
  };

  it("Should be possible to list a person", async () => {
    
    const { text } = await supertest(app).post('/api/v1/people/').send(peopleInformation);
    const { _id } = JSON.parse(text);
    const response = await supertest(app).get(`/api/v1/people/${_id.toString()}`);
    
    const { status } = response;
    expect(status).toBe(200);
  });

  it("Should be possible to give an error when listing sintax", async () => { 
    
    const { text } = await supertest(app).post('/api/v1/people/').send(peopleInformation);
    const { _id } = JSON.parse(text);
    const response = await supertest(app).get(`/api/v1/peopl/${_id.toString()}`);

    const { status } = response;
    expect(status).toBe(404);

  });


});