const config = {
  port: process.env.PORT ?? 3200,
  cacheMaxSize: process.env.CACHE_MAX_SIZE ?? 20,
  dataSourceUrl: process.env.DATA_SOURCE_URL ?? 'https://random-data-api.com/api'
};

module.exports = { config };
