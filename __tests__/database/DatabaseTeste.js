const NodeEnvironment = require('jest-environment-node');
const { execSync } = require('child_process');

const Mongoose = require('mongoose');

class DatabaseTest extends NodeEnvironment {

  constructor(config) {

    super(config);
    this.schema = 'code_schema';
    this.connectionString = process.env.DATABASE;
  }
    
  setup() { 

    process.env.DATABASE = this.connectionString;
    this.global.process.env.DATABASE = this.connectionString;

    execSync(Mongoose);
  }

  teardown() {

    Mongoose.connection.close();
  
  }

}

module.exports = DatabaseTest;