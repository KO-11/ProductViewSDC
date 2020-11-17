const db = require('/Users/jimmylin/Desktop/Product-View/db/models.js');
const controller = {
  get: (req, res) => {
    db.find()
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  post: (req, res) => {
    db.create(req.body)
    .then(() => {
      res.status(200).send('You posted!')
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  },
  delete: (req, res) => {
    db.remove({})
      .then(() => {
        res.status(200).send("All entries deleted");
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  }
}

module.exports = controller;