//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//
const app = require('./app')
const http = require('http')

//
// ─── SERVER SETUP ───────────────────────────────────────────────────────────────
//
const port = normalizePort(process.env.port || '3000')
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

//
// ─── HELPERS ────────────────────────────────────────────────────────────────────
//
function normalizePort(val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  switch (error.code) {
  case 'EACCES':
    process.exit(1)
    break
  case 'EADDRINUSE':
    process.exit(1)
    break
  default:
    throw error
  }
}

function onListening() {
  const address = server.address()
  const bind = typeof address === 'string' ? `Pipe ${port}` : `Port ${port}`
  console.log(`Listening on ${bind}`)
}
