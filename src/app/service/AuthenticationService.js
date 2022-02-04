const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AuthenticationRepository = require('../repository/AuthenticationRepository');
const authConfig = require('../config/auth.json');
const BadRequest = require('../errors/badRequest');
const NotFound = require('../errors/NotFound');
const Forbidden = require('../errors/Forbidden');

class AuthenticationService { 

  async Authenticate(login) {
        
    const result = await AuthenticationRepository.Authenticate(login);
    if (!result)
      throw new NotFound('User not found'); 

    if (result.habilitado !== 'sim') 
      if (result.habilitado !== 'Sim')  
        throw new Forbidden('User not enabled');

    if(!await bcrypt.compare(login.senha, result.senha))
      throw new BadRequest('Invalid password');

    result.senha = undefined;

    const token = jwt.sign({id: result.id}, authConfig.secret, {

      expiresIn: 86400
    });

    return({result, token});
  }
    
} 

module.exports = new AuthenticationService(); 
