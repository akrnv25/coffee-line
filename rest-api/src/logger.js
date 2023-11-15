const pino = require('pino');
const pinoHttp = require('pino-http');
const { config } = require('./config');

const logger = pino({
  level: config.logLevel,
  formatters: {
    level: (label) => ({ level: label }),
    bindings: (bindings) => ({ pid: bindings.pid, host: bindings.hostname })
  },
  timestamp: pino.stdTimeFunctions.isoTime
});
const httpLogger = pinoHttp({ logger });

module.exports = { logger, httpLogger };
