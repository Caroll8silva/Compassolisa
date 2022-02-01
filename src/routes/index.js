const { Router } = require('express');
const carsRouter = require("./carsRouter.js");
const peopleRouter = require("./peopleRouter");
const authenticationRouter = require("./authenticationRouter");

module.exports = server => {
  server.use((req, res, next) => {
    carsRouter(server, new Router());
    peopleRouter(server, new Router());
    authenticationRouter(server, new Router());
    next();
  });
}; 