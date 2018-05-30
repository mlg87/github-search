module.exports = query => (req, res, next) => {
  if (!req.query[query]) {
    res.status(400).json({ error: `Invalid request: missing ${query} query` })
  } else {
    next()
  }
}
