class NotFound extends Error {
    
    constructor(messageStatus) {

      super(messageStatus)
      this.status = 404
      this.messageStatus = messageStatus
      
    }
  }
  
  module.exports = NotFound