const swagger = require('swagger-ui-express');
const documentation = require('../../apiDocumentation.json');

module.exports = (server, routes, prefix = '/api/v1/api-docs') => {
  routes.use('/', swagger.serve, swagger.setup(documentation));
  server.use(prefix, routes); 
};