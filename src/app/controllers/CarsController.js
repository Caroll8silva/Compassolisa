const CarsService = require("../service/CarsService");

class CarsController {
  async createCar(req, res) {
    try {
      const result = await CarsService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({'description:': error.name, 'name:': error.message});
    }
  }

  async getAllCars(req, res) {
    try {
      const result = await CarsService.find(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({'description:': error.name, 'name:': error.message});
    }
  }

  async getOneCar(req, res) {
    try {
      const { id } = req.params;
      const result = await CarsService.findOne(id);

      if (!result) {
        return res.status(404).json({ message: 'Car not found' });
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({'description:': error.name, 'name:': error.message});
    }
  }

  async deleteCar(req, res) {
    try {
      const { id } = req.params;
      const result = await CarsService.delete(id);

      if (!result) {
        return res.status(404).json({ message: 'Car not found' });
      }

      return res.status(204).json();
    } catch (error) {
      return res.status(400).json({'description:': error.name, 'name:': error.message});
    }
  }

  async updateCar(req, res) {
    try {
      const { id } = req.params;
      const result = await CarsService.update(id, req.body);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({'description:': error.name, 'name:': error.message});
    }
  }

  async updateAcessories(req, res) {
    try {
      const { descricao } = req.body;
      const { id, id2 } = req.params;
      const result = await CarsService.patch(id, { _id: id2, descricao});

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({'description:': error.name, 'name:': error.message});
    }
  }
}

module.exports = new CarsController();
