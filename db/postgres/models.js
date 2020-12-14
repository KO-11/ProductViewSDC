const db = require('./index.js');

const model = {
  find: () => db.query('select data from games'),
  findOne: (item) => db.query(`select data from games where cast (data -> 'id' as integer) = ${item}`),
  create: (item) => db.query(`insert into games (data) values ('${item}')`),
  update: (item) => db.query(`update games set data -> 'item'= ${item.item}, 'price' = ${item.price}, 'imgUrl' = ${item.imgUrl}, 'system = ${item.system} where cast (data -> 'id' as integer) = ${item.id}`),
  remove: ({}) => db.query(`drop table games`),
  removeOne: (item) => db.query(`delete from games where cast (data -> 'id' as integer) = ${item}`)
}

module.exports = model;