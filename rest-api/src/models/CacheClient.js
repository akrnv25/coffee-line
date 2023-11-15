class CacheClient {
  constructor(cache) {
    this.cache = cache;
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

module.exports = { CacheClient };
