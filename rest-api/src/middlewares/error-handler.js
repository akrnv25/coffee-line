const errorHandler = (err, req, res, next) => {
  const message = err?.message ?? 'Unknown error';
  res.status(400).json({ message });
};

module.exports = { errorHandler };
