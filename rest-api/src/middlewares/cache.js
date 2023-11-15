const { cacheService } = require('../services/cache.service');
const { logger } = require('../logger');

const cache = () => {
  return (req, res, next) => {
    const cachedData = cacheService.get(req.originalUrl);
    if (cachedData !== undefined) {
      logger.info({ originalUrl: req.originalUrl }, 'Data was received from the cache');
      res.status(200).json(cachedData);
      return;
    }
    const oldJson = res.json;
    res.json = (body) => {
      cacheService.set(req.originalUrl, body);
      return oldJson.call(res, body);
    };
    next();
  }
};

module.exports = { cache };
