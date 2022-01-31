class BadRequest extends Error {
    
    constructor(messageStatus) {

      super(messageStatus)
      this.status = 403
      this.messageStatus = messageStatus 
      
    }
  }
  
  module.exports = BadRequest