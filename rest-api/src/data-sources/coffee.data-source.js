const { httpService } = require('../services/http.service');
const { config } = require('../config');
const { isInteger, isString } = require('../utilities/check-type');

class Coffee {
  constructor({ id, uid, blend_name, origin, variety, notes, intensifier }) {
    this.id = isInteger(id) ? id : null;
    this.uid = isString(uid) ? uid : null;
    this.blendName = isString(blend_name) ? blend_name : null;
    const originChips = isString(origin) ? origin.split(', ') : [];
    this.location = originChips[0] ?? null;
    this.country = originChips[1] ?? null;
    this.variety = isString(variety) ? variety : null;
    this.notes = isString(notes) ? notes.split(', ') : [];
    this.intensifier = isString(intensifier) ? intensifier : null;
  }
}

class CoffeeDataSource {
  constructor() {
    this.baseUrl = `${config.dataSourceUrl}/coffee`;
  }

  async getRandom() {
    try {
      const data = await httpService.get(`${this.baseUrl}/random_coffee`);
      return new Coffee(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

module.exports = { coffeeDataSource: new CoffeeDataSource() };
