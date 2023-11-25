const express = require("express");
const {
  listado,
  perfil,
  nuevoUsuario,
} = require("../controllers/users.controllers");
const router = express.Router();

//GET Usuarios http://localhost:3000/usuarios
router.get("/", listado);
//GET perfil http://localhost:3000/usuarios/1
router.get("/perfil/:id", perfil);
//POST crear http://localhost:3000/usuarios/create
router.post("/crear", nuevoUsuario);

module.exports = router;
