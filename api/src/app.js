//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//
const app = require('express')()
const morgan = require('morgan')
const winston = require('./log-config/winston')
const cookieParser = require('cookie-parser') // necessary?
const bodyParser = require('body-parser')
const { version } = require('../../package.json') // for sanity check
const { repositories: repositoryRoutes } = require('./routes')

//
// ─── MIDDLEWARE ─────────────────────────────────────────────────────────────────
//
app.use(morgan('combined', { stream: winston.stream }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }))
app.use(cookieParser())

app.use('/repositories', repositoryRoutes)

//
// ─── SANITY ─────────────────────────────────────────────────────────────────────
//
app.get('/ping', (req, res) => {
  res
    .status(200)
    .json({ error: null, content: { message: `App Version::: ${version}` } })
})

//
// ─── CATCH ERRORS ───────────────────────────────────────────────────────────────
//
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

/* eslint-disable no-unused-vars */
app.use((error, req, res, next) => {
  const message = req.app.get('env') === 'development' ? error : {}
  res.status(error.status || 500)
  res.json({
    error,
    content: null
  })
})
/* eslint-enable no-unused-vars */

module.exports = app
