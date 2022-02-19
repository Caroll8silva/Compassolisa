const mongoose = require('mongoose');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
   
    const db = process.env.DATABASE || 'mongodb://127.0.0.1:27017/compassolisaTest';
    return mongoose.connect(db);

  }

  disconnect() {
    return mongoose.connection.close();
  }
}

module.exports = new Database().connect();
