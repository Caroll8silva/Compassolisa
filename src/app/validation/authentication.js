const jwt = require('jsonwebtoken');
const auth = require('../config/auth.json');

module.exports = (req, res, next) => {
  try {

    let token = req.headers.authorization;

    if (!token){

      return res.status(400).send({'description:': 'token', 'name:': 'I need to insert a token'});
    }

    token = token.replace('Bearer ', '');
    
    const search = jwt.verify(token, auth.secret);
    req.response = search;
    
    return next();
  } catch (error) {
    return res.status(400).json({ 'description:': error.name, 'name:': error.message});
  }
};