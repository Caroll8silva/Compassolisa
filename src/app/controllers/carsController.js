const carsService = require("../service/carsService");

class CarsController {
  async createCar(req, res) {
    try {
      const result = await carsService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async getAllCars(req, res) {
    try {
      const result = await carsService.find(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async getOneCar(req, res) {
    try {
      const { id } = req.params;
      const result = await carsService.findOne(id);

      if (!result) {
        return res.status(404).json({ message: 'Car not found' });
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async deleteCar(req, res) {
    try {
      const { id } = req.params;
      const result = await carsService.delete(id);

      if (!result) {
        return res.status(404).json({ message: 'Car not found' });
      }

      return res.status(204).json();
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async updateCar(req, res) {
    try {
      const { id } = req.params;
      const result = await carsService.update(id, req.body);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = new CarsController();
