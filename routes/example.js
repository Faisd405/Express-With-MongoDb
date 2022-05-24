var express = require('express');
var router = express.Router();
var ExampleController = require('../app/Controllers/ExampleController');

/* GET home page. */
router.get('/', ExampleController.getAll);
router.post('/', ExampleController.store);
router.get('/:id', ExampleController.show);
router.put('/:id', ExampleController.update);
router.delete('/:id', ExampleController.delete);

module.exports = router;
