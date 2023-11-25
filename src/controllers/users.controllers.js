const {
  Usuarios,
  HistorialCompras,
  Productos,
  Categorias,
} = require("../database/models");

module.exports = {
  listado: (req, res) => {
    Usuarios.findAll({
      attributes: { exclude: ['contrasena'] } //excluir atributos
    })
      .then((usuarios) => {
        res.json(usuarios);
      })
      .catch((error) => res.json(error));
  },
  perfil: (req, res) => {
    Usuarios.findOne({
      where: { id: req.params.id },
      attributes: { exclude: ['contrasena'] } 
    })
      .then((usuario) => {
        res.json(usuario);
      })
      .catch((error) => res.json(error));
  },
  nuevoUsuario: (req, res) => {
    console.log(req.body);
    Usuarios.create({
      ...req.body,
    })
      .then((nuevoUsuario) => {
        res.json(nuevoUsuario);
      })
      .catch((error) => res.json(error));
  },

  // Agregar nueva compra
  nuevoHistorial: async (req, res) => {
    const { usuario_id, producto_id, cantidad, fecha_compra } = req.body;

    HistorialCompras.create({
      usuario_id,
      producto_id,
      cantidad,
      fecha_compra,
    })
      .then((nuevaCompra) => {
        res.json(nuevaCompra);
      })
      .catch((error) => res.json(error));
  },
  // Obtener historial de compras de un usuario por su ID
  historialUsuario: (req, res) => {
    const { id } = req.params;

    HistorialCompras.findAll({
      where: { usuario_id: id },
      include: {all:true} //traerse todo
      /* include: [ 
        {
          model: Productos,
          include: [{ model: Categorias, as: "categoria" }],
        },
      ], */
    })
      .then((historialCompras) => {
        res.json(historialCompras);
      })
      .catch((error) => console.log(error));
  },
};
