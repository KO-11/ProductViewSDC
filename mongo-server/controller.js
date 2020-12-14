const db = require('../db/mongo/models.js');
const controller = {
  get: (req, res) => {
    db.find({})
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  getOne: (req, res) => {
    db.findOne({id: req.params.id})
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
  put: (req, res) => {
    db.update(req.body)
    .then(() => {
      res.status(200).send('Updated')
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
  },
  deleteOne: (req, res) => {
    db.removeOne(req.body)
      .then(() => {
        res.status(200).send("Entry deleted");
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  }
}

module.exports = controller;