const db = require("../database/models");

module.exports = {
  listado: (req, res) => {
    db.Usuarios.findAll()
      .then((usuarios) => {
        res.json(usuarios);
      })
      .catch((error) => console.log(error));
  },
  perfil: (req, res) => {
    db.Usuarios.findOne({
      where: { id: req.params.id },
    })
      .then((usuario) => {
        res.json(usuario);
      })
      .catch((error) => console.log(error));
  },
  nuevoUsuario: (req, res) => {
    console.log(req.body);
    db.Usuarios.create({
      ...req.body,
    })
      .then((nuevoUsuario) => {
        res.json(nuevoUsuario);
      })
      .catch((error) => res.send(error));
  },
};
