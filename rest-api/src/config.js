const config = {
  port: process.env.PORT ?? 3200,
  cacheMaxSize: process.env.CACHE_MAX_SIZE ?? 20
};

module.exports = { config };
