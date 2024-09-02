require('dotenv').config()

const database = require('./database')
const server = require('./server')
const crypt = require('./crypt')

module.exports = {
  database,
  server,
  crypt,
}
