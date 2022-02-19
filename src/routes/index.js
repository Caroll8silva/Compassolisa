const { Router } = require('express');
const carsRouter = require("./carsRouter");
const peopleRouter = require("./peopleRouter");
const authenticationRouter = require("./authenticationRouter");
const rentalRouter = require('./rentalRouter');
const swaggerRouter = require('./swaggerRouter');

module.exports = server => {
  server.use((req, res, next) => {
    carsRouter(server, new Router());
    peopleRouter(server, new Router());
    authenticationRouter(server, new Router());
    rentalRouter(server, new Router());
    swaggerRouter(server, new Router());
    next();
  });
}; 