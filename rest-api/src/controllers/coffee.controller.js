const { coffeeDataSource } = require('../data-sources/coffee.data-source');

class CoffeeController {
  constructor() {
  }

  async getById(req, res, next) {
    try {
      const data = await coffeeDataSource.getRandom();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { coffeeController: new CoffeeController() };
