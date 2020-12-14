const pg = require('pg');

pg.Promise = global.Promise;

const client = new pg.Client({
    user: 'kevinolson',
    host: 'localhost',
    database: 'items',
    password: '',
    port: 5432,
});

client.connect()
  .then(() => {
  console.log('connected to postgres');
  })
  .catch((err) => {
      console.log(err);
  })

module.exports = client;

