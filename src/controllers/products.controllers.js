const db = require("../database/models");
const Op = db.Sequelize.Op;
module.exports = {
  listado: async (req, res) => {
    const productos = await db.Productos.findAll();
    res.json(productos);
  },
  detalle: async (req, res) => {
    const producto = await db.Productos.findByPk(req.params.id);
    res.json(producto);
  },
  searchByName: async (req, res) => {
    const producto = await db.Productos.findOne({
      where: {
        nombre: { [Op.like]: `%${req.query.search}%` },
      },
      order: [["precio", "ASC"]],
    });
    res.json(producto);
  },
};
