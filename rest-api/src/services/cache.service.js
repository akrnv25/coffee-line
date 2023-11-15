const { config } = require('../config');
const { CacheFIFO } = require('../models/CacheFIFO');
const { CacheLRU } = require('../models/CacheLRU');
const { Cache2Q } = require('../models/Cache2Q');

class CacheService {
  constructor() {
    // in - 20%, out - 60%, hot - 20%
    const oneFifth = Math.round(config.cacheMaxSize * 0.2);
    const threeFifths = config.cacheMaxSize - oneFifth * 2;
    const inCache = new CacheFIFO(oneFifth);
    const outCache = new CacheFIFO(threeFifths);
    const hotCache = new CacheLRU(oneFifth);
    this.cache = new Cache2Q({ inCache, outCache, hotCache });;
  }

  get(key) {
    return this.cache.get(key);
  }

  set(key, value) {
    return this.cache.set(key, value);
  }

  delete(key) {
    return this.cache.delete(key);
  }

  has(key) {
    return this.cache.has(key);
  }
}

module.exports = { cacheService: new CacheService() };
