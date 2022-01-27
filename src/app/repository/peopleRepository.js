const peopleSchema = require('../schema/people')

class PeopleRepository { 
  async create(payload) {

    return peopleSchema.create(payload)
  }
}

module.exports = new PeopleRepository()   