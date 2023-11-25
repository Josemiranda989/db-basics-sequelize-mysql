const express = require("express");
const {
  listado,
  detalle,
  buscarPorNombre,
} = require("../controllers/products.controllers");
const router = express.Router();

//GET PRODUCTS http://localhost:3000/productos
router.get("/", listado);
//GET DETAIL http://localhost:3000/productos/detalle/1
router.get("/detalle/:id", detalle);
//GET SEARCH http://localhost:3000/productos/search?nombre=lap
router.get("/search", buscarPorNombre);

module.exports = router;
