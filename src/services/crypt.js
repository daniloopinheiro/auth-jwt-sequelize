const bcrypt = require('bcrypt')
const { crypt: config } = require('../../config')

const hash = value =>
  bcrypt
    .hash(value, config.hashSaltRounds)

const compare = (value, hash) =>
  bcrypt.compare(value, hash)

module.exports = {
  hash,
  compare,
}
