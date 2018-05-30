module.exports = (req, res, next) => {
  // TODO improve the check
  if (!Object.keys(req.body).length) {
    res.status(400).send('incorrect body on request')
  } else {
    next()
  }
}
