const express = require('express');
const { config } = require('./config');
const { routes } = require('./routes');
const { logger, httpLogger } = require('./logger');
const { errorHandler } = require('./middlewares/error-handler');

logger.info(config, 'Config');

const app = express();

app.use(httpLogger);
app.use('/api', routes);
app.use(errorHandler);

app.listen(config.port, () => {
  logger.info(`App is listening on port ${config.port}`);
});
