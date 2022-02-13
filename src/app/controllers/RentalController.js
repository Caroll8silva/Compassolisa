const RentalService = require("../service/RentalService");

class RentalController {
  async createRental(req, res) {
    try {
      const result = await RentalService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({'description:': error.name, 'name:': error.message});
    }
  }

  async getAllRentals(req, res) {
    try {
      const result = await RentalService.find(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({'description:': error.name, 'name:': error.message});
    }
  }

  async getOneRental(req, res) {
    try {
      const { id } = req.params;
      const result = await RentalService.findOne(id);

      if (!result) {
        return res.status(404).json({'description:': 'ID', 'name:': 'ID not Found'});
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({'description:': error.name, 'name:': error.message});
    }
  }

  async deleteRental(req, res) {
    try {
      const { id } = req.params;
      const result = await RentalService.delete(id);

      if (!result) {
        return res.status(404).json({'description:': 'ID', 'name:': 'ID not Found'});
      }

      return res.status(204).json();
    } catch (error) {
      return res.status(400).json({'description:': error.name, 'name:': error.message});
    }
  }

  async updateRental(req, res) {
    try {
      const { id } = req.params;
      const result = await RentalService.update(id, req.body);

      if (!result) {
        return res.status(404).json({'description:': 'ID', 'name:': 'ID not Found'});
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({'description:': error.name, 'name:': error.message});
    }
  }
}

module.exports = new RentalController();
