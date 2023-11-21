const express = require('express');
const { listado } = require('../controllers/products.controllers');
const router = express.Router();

router.get('/', listado);

module.exports = router;