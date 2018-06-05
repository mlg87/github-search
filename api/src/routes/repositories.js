const router = require('express').Router()
const axios = require('axios')
const { cache, hasQuery } = require('../utils')
const { version } = require('../../package.json')

router.get(
  '/',
  hasQuery('q'),
  hasQuery('sort'),
  cache(30),
  async (req, res) => {
    const q = req.query.q.split(' ').reduce((accum, cv, i) => {
      return i === 0 ? cv : `${accum}+${cv}`
    }, '')

    try {
      const { data } = await axios.get(
        `https://api.github.com/search/repositories?q=${q}&sort=${
          req.query.sort
        }`
      )
      res.status(200).json({ content: data, error: null })
    } catch (error) {
      console.error(error)
      res.status(500).json({ content: null, error })
    }
  }
)

router.get('/test', (req, res) => {
  res.status(200).json({ content: 'hola', error: null })
})

module.exports = router
