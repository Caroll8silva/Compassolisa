const peopleService = require("../service/peopleService");

class PeopleController {
  async createPeople(req, res) {
    try {
      const result = await peopleService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async getAllPeople(req, res) {
    try {
      const result = await peopleService.find(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async getOnePerson(req, res) {
    try {
      const { id } = req.params;
      const result = await peopleService.findOne(id);

      if (!result) {
        return res.status(404).json({ message: 'Person not found' });
      }

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async deletePeople(req, res) {
    try {
      const { id } = req.params;
      const result = await peopleService.delete(id);
      if (!result) {
        return res.status(404).json({ message: 'Person not found' });
      }

      return res.status(204).json();
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async updatePeople(req, res) {
    try {
      const { id } = req.params;
      const result = await peopleService.update(id, req.body);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = new PeopleController();
