const pino = require('pino');
const pinoHttp = require('pino-http');

const logger = pino({});
const httpLogger = pinoHttp({ logger });

module.exports = { logger, httpLogger };
