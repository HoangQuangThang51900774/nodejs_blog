const express = require('express');
const router = express.Router();

var a = 1
var b = 2
var c = a + b

const productsController = require('../app/controllers/productsController');
router.get('/', productsController.listProduct);
router.get('/:slug', productsController.show);
module.exports = router;
