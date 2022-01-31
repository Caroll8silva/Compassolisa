const AuthenticationService = require('../service/AuthenticationService')
const authMiddleWares = require('../middlewares/authentication')

class AuthenticationController { 

    async Authenticate (req, res) {
        try {

            const { email, senha } = req.body
            const result = await AuthenticationService.Authenticate({email, senha})
            return res.status(200).json(result) 

        } catch (error) {
            return res.status(500).json(error.message)
          }
    }
     
}

module.exports = new AuthenticationController()