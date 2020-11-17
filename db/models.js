const db = require('./index.js');

const model = {
  find: () => db.find({}),
  create: (item) => db.create(item),
  remove: ({}) => db.remove({})

}

module.exports = model;