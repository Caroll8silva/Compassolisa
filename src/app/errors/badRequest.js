class BadRequest extends Error {
    
    constructor(messageStatus) {

      super(messageStatus)
      this.status = 400
      this.messageStatus = messageStatus
      
    }
  }
  
  module.exports = BadRequest