const { Router } = require('express');
const carsRouter = require('../routes/carsRouter.js');
//const peopleRouter = require('../Routes/peopleRouter')

module.exports = server => {
  server.use((req, res, next) => {
    carsRouter(server, new Router())
    //peopleRouter(server,new Router())
    next();
  });
}; 