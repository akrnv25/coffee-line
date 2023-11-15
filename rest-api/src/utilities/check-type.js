function isString(value) {
  return typeof value === 'string';
}

function isInteger(value) {
  return Number.isInteger(value);
}

function isNil(value) {
  return value === undefined || value === null;
}

function isUrl(value) {
  if (typeof value !== 'string') {
    return false;
  }
  try {
    const url = new URL(value);
    return /^(http:|https:)$/.test(url.protocol);
  } catch (err) {
    return false;
  }
}

module.exports = { isString, isInteger, isNil, isUrl };
