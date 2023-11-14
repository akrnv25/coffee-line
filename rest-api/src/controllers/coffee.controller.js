class CoffeeController {
  constructor() {
  }

  getById(req, res) {
    res.status(200).json({});
  }
}

module.exports = { coffeeController: new CoffeeController() };
