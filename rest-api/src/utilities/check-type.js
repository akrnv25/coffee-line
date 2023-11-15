function isString(value) {
  return typeof value === 'string';
}

function isInteger(value) {
  return Number.isInteger(value);
}

function isNil(value) {
  return value === undefined || value === null;
}

module.exports = { isString, isInteger, isNil };
