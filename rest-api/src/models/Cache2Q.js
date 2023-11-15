const { CacheClient } = require('./CacheClient');
const { CacheFIFO } = require('./CacheFIFO');
const { CacheLRU } = require('./CacheLRU');

class Cache2Q {
  constructor(maxSize) {
    // in - 1/5, out - 3/5, hot - 1/5
    const fifthPart = Math.round(maxSize * 0.2);
    this.inCache = new CacheClient(new CacheFIFO(fifthPart));
    this.outCache = new CacheClient(new CacheFIFO(maxSize - fifthPart * 2));
    this.hotCache = new CacheClient(new CacheLRU(fifthPart));
  }

  get(key) {
    const inValue = this.inCache.get(key);
    if (inValue !== undefined) {
      return inValue;
    }
    const hotValue = this.hotCache.get(key);
    if (hotValue !== undefined) {
      return hotValue;
    }
    const outValue = this.outCache.get(key);
    if (outValue !== undefined) {
      this.outCache.delete(key);
      this.hotCache.set(key, outValue);
      return outValue;
    }
  }

  set(key, value) {
    let detached = null;
    if (value === undefined) {
      return { detached };
    }
    if (this.inCache.has(key)) {
      detached = this.inCache.set(key, value).detached;
    } else if (this.hotCache.has(key)) {
      detached = this.hotCache.set(key, value).detached;
    } else if (this.outCache.has(key)) {
      detached = this.outCache.set(key, value).detached;
    } else {
      detached = this.inCache.set(key, value).detached;
      if (detached !== null) {
        this.outCache.set(detached.key, detached.value);
      }
    }
    return { detached };
  }

  delete(key) {
    return this.inCache.delete(key)
      || this.hotCache.delete(key)
      || this.outCache.delete(key);
  }

  has(key) {
    return this.inCache.has(key)
      || this.hotCache.has(key)
      || this.outCache.has(key);
  }
}
