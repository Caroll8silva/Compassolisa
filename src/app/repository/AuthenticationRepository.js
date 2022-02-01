const peopleSchema = require('../schema/people');

class AuthenticationRepository { 
  async Authenticate(login) {
   
    const { email } = login;
    
    return peopleSchema.findOne({ email }).select('+senha');
  }
}
 
module.exports = new AuthenticationRepository();   