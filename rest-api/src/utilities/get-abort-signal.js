function getAbortSignal(timeout) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeout || 0);
  return abortController.signal;
}

module.exports = { getAbortSignal };
