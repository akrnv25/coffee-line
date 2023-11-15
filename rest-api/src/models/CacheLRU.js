class CacheLRU {
  constructor(maxSize) {
    this.cache = new Map();
    this.maxSize = maxSize;
  }

  get(key) {
    const value = this.cache.get(key);
    this.set(key, value);
    return value;
  }

  set(key, value) {
    let detached = null;
    if (value === undefined) {
      return { detached };
    }
    this.cache.delete(key);
    if (this.cache.size === this.maxSize) {
      const keyToDetach = this.cache.keys().next().value;
      detached = { key: keyToDetach, value: this.cache.get(keyToDetach) };
      this.cache.delete(keyToDetach);
    }
    this.cache.set(key, value);
    return { detached };
  }

  delete(key) {
    return this.cache.delete(key);
  }

  has(key) {
    return this.cache.has(key);
  }
}

module.exports = { CacheLRU };
