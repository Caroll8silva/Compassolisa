class NotUnique extends Error {
  constructor(messageStatus) {
    super(messageStatus);
    this.status = 409;
    this.messageStatus = messageStatus;
  }
}
  
module.exports = NotUnique;
  