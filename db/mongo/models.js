const db = require('./index.js');

const model = {
  find: () => db.find({}),
  findOne: (item) => db.findOne(item),
  create: (item) => db.create(item),
  update: (item) => db.findOneAndUpdate(item),
  remove: ({}) => db.deleteMany({}),
  removeOne: (item) => db.findOneAndDelete(item)
}

module.exports = model;