const { httpService } = require('../services/http.service');
const { config } = require('../config');

class CoffeeDataSource {
  constructor() {
    this.baseUrl = `${config.dataSourceUrl}/coffee`;
  }

  getRandom() {
    return httpService.get(`${this.baseUrl}/random_coffee`);
  }
}

module.exports = { coffeeDataSource: new CoffeeDataSource() };
