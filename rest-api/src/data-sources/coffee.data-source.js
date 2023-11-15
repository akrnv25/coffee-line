const { httpService } = require('../services/http.service');
const { config } = require('../config');
const { isInteger, isString, isUrl } = require('../utilities/check-type');

class Coffee {
  constructor(data, image) {
    this.id = isInteger(data?.id) ? data.id : null;
    this.uid = isString(data?.uid) ? data.uid : null;
    this.blendName = isString(data?.['blend_name']) ? data['blend_name'] : null;
    const originChips = isString(data?.origin) ? data.origin.split(', ') : [];
    this.location = originChips[0] ?? null;
    this.country = originChips[1] ?? null;
    this.variety = isString(data?.variety) ? data.variety : null;
    this.notes = isString(data?.notes) ? data.notes.split(', ') : [];
    this.intensifier = isString(data?.intensifier) ? data.intensifier : null;
    this.image = isUrl(image?.file) ? image.file : null
  }
}

class CoffeeDataSource {
  constructor() {
  }

  async getRandom() {
    try {
      const [data, image] = await Promise.all([
        httpService.get(`${config.dataApiUrl}/coffee/random_coffee`),
        httpService.get(`${config.imagesApiUrl}/json/500/500/coffee,bean`)
      ]);
      return new Coffee(data, image);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

module.exports = { coffeeDataSource: new CoffeeDataSource() };
