const AuthenticationRepository = require('../repository/AuthenticationRepository')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

class AuthenticationService { 

    async Authenticate(login) {
        
        const result = await AuthenticationRepository.Authenticate(login)
        if (!result)
        throw Error('User not found') 

        if (result.habilitado !== 'sim') 
        if (result.habilitado !== 'Sim')  
        throw Error('User not enabled')

        if(!await bcrypt.compare(login.senha, result.senha))
        throw Error('Invalid password')

        result.senha = undefined

        const token = jwt.sign({id: result.id}, authConfig.secret, {

            expiresIn: 86400
        })

        return({result, token})
    }
    
} 

module.exports = new AuthenticationService() 
