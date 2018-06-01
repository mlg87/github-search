const router = require('express').Router()
const axios = require('axios')
const { version } = require('../../package.json')

router.get('/', async (req, res) => {
  const q = req.query.q.split(' ').reduce((accum, cv, i) => {
    return i === 0 ? cv : `${accum}+${cv}`
  }, '')

  try {
    const { data } = await axios.get(
      `https://api.github.com/search/repositories?q=${q}`
    )
    res.status(200).json({ content: data, error: null })
  } catch (error) {
    console.error(error)
    res.status(500).json({ content: null, error })
  }
})

router.get('/test', (req, res) => {
  res.status(200).json({ message: 'this is for the love of god dude' })
})

module.exports = router
