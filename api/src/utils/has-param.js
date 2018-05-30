module.exports = param => (req, res, next) => {
  if (!req.params[param]) {
    res.status(400).json({ error: `Invalid request: missing ${param} param` })
  } else {
    next()
  }
}
