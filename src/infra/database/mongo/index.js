const mongoose = require('mongoose');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
   
    const db = process.env.DATABASE || 'mongodb://127.0.0.1:27017/compassolisa';
    return mongoose.connect(db);

  }
}

module.exports = new Database().connect();
