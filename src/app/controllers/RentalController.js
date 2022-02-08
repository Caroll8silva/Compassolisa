const RentalService = require("../service/RentalService");

class RentalController {
  async createRental(req, res) {
    try {
      const result = await RentalService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async getAllRentals(req, res) {
    try {
      const result = await RentalService.find(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = new RentalController();
