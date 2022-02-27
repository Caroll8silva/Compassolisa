const ReserveService = require("../service/ReserveService");

class ReserveController {
  
  async createReserve(req, res) {
    try {

      const result = await ReserveService.create(req.body, req.params);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({'description:': error.name, 'name:': error.message});
    }
  }
}
module.exports = new ReserveController();
