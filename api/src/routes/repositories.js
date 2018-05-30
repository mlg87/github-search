const router = require('express').Router()
const { version } = require('../../package.json')

router.get('/', (req, res) => {
  res.status(200).json({ version })
})

router.get('/test', (req, res) => {
  res.status(200).json({ message: 'this is for the love of god dude' })
})

module.exports = router
