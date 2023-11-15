const { logger } = require('../logger');

const errorHandler = (err, req, res, next) => {
  let code, text;
  if (err?.code === 'ECONNABORTED') {
    // request timeout
    code = 408;
    text = 'Request timeout. Please try again later.'
  } else if (err?.code === 'ERR_CANCELED') {
    // connection timeout
    code = 408;
    text = 'Connection timeout. Please try again later.'
  } else if (err?.response?.status !== undefined) {
    // some external error
    switch (err?.response?.status) {
      case 404:
        code = 404;
        text = 'Data not found. Check your request.';
        break;
      default:
        code = 400;
        text = 'Unknown external error. Please try again later.'
    }
  } else {
    // some inner error
    code = 400;
    text = 'Unknown inner error. Please try again later.'
  }
  logger.error(err);
  res.status(400).json({ error: { code, text } });
};

module.exports = { errorHandler };
