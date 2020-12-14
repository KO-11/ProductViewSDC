const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/items')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete)

router
  .route('/items/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.deleteOne)

module.exports = router;