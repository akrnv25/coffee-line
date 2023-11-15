const config = {
  port: process.env.PORT ?? 3200,
  cacheMaxSize: process.env.CACHE_MAX_SIZE ?? 20,
  dataApiUrl: process.env.DATA_API_URL ?? 'https://random-data-api.com/api',
  imagesApiUrl: process.env.IMAGES_API_URL ?? 'https://loremflickr.com',
  connectionTimeout: process.env.CONNECTION_TIMEOUT ?? 1000,
  requestTimeout: process.env.REQUEST_TIMEOUT ?? 3000
};

module.exports = { config };
