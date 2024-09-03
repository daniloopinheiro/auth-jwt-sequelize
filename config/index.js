require('dotenv').config()

const database = require('./database')
const server = require('./server')
const crypto = require('./crypt')

module.exports = {
  database,
  server,
  crypto,
}

// const config = {
//   "local": {
//     "username": env.DB_USER,
//     "password": env.DB_PASSWORD,
//     "database": 'dbAuth',
//     "host": env.DB_HOST,
//     "port": env.DB_PORT,
//     "dialect": 'postgres'
//   },
//   "development": {
//     // "username": "root",
//     // "password": null,
//     // "database": "database_development",
//     // "host": "127.0.0.1",
//     // "dialect": "mysql",
//     // "operatorsAliases": false
//   },
//   "test": {
//     // "username": "root",
//     // "password": null,
//     // "database": "database_test",
//     // "host": "127.0.0.1",
//     // "dialect": "mysql",
//     // "operatorsAliases": false
//   },
//   "production": {
//     // "username": "root",
//     // "password": null,
//     // "database": "database_production",
//     // "host": "127.0.0.1",
//     // "dialect": "mysql",
//     // "operatorsAliases": false
//   }
// }
