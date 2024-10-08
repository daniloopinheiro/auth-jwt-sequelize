module.exports = {
  // Dialetos Plugáveis: A biblioteca foi construída para suportar vários dialetos SQL, tornando-a adaptável a vários sistemas de banco de dados relacionais.
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
}
