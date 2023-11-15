const axios = require('axios');
const { config } = require('../config');
const { getAbortSignal } = require('../utilities/get-abort-signal');

class HttpService {
  constructor() {
  }

  async get(url) {
    try {
      const res = await axios.get(url, {
        timeout: config.requestTimeout,
        signal: getAbortSignal(config.connectionTimeout)
      });
      return Promise.resolve(res?.data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

module.exports = { httpService: new HttpService() };
