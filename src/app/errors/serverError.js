class InternalServerError extends Error {
  constructor(messageStatus) {
    super(messageStatus);
    this.status = 500;
    this.messageStatus = messageStatus;
  }
}

module.exports = InternalServerError;
