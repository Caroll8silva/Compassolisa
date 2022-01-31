const { Router } = require('express');
const carsRouter = require('../routes/carsRouter.js')
const peopleRouter = require('../routes/peopleRouter')
const authenticationRouter = require('../routes/authenticationRouter')

module.exports = server => {
  server.use((req, res, next) => {
    carsRouter(server, new Router())
    peopleRouter(server,new Router())
    authenticationRouter(server,new Router())
    next();
  });
}; 