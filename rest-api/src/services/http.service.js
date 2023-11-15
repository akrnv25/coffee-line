const axios = require('axios');

class HttpService {
  constructor() {
  }

  async get(url) {
    try {
      const res = await axios.get(url);
      return Promise.resolve(res.data)
    } catch (err) {
      return Promise.reject(new Error(err.response.statusText));
    }
  }
}

module.exports = { httpService: new HttpService() };
