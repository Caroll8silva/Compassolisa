const peopleService = require('../service/peopleService')

class PeopleController { 

    async createPeople(req, res) {
        try {

            const result = await peopleService.create(req.body)
            return res.status(201).json(result) 

        } catch (error) {
            return res.status(500).json(error.message)
          }
    }
    async getAllPeople(req, res) {
        try {

          const result = await peopleService.find(req.query)
          return res.status(200).json(result)

        } catch (error) {
          return res.status(500).json(error.message)
          }
    }
}

module.exports = new PeopleController() 