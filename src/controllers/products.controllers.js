const db = require("../database/models");
const Op = db.Sequelize.Op;
module.exports = {
  // -Todos los productos incluyendo la relación con su categoría
  listado: async (req, res) => {
    try {
      const productos = await db.Productos.findAll({
        include: ["categoria"],
      });
      res.json(productos);
    } catch (error) {
      console.log(error);
    }
  },
  //  -Detalle de producto por params para obtener ID :id
  detalle: async (req, res) => {
    try {
      //Si necesitamos buscar por otro atributo usamos findOne
      const producto = await db.Productos.findByPk(req.params.id);
      res.json(producto);
    } catch (error) {
      console.log(error);
    }
  },
  //   -Busqueda por nombres por query ordenada por precio ?nombre=laptop
  buscarPorNombre: async (req, res) => {
    try {
      const producto = await db.Productos.findAll({
        where: {
          nombre: { [Op.like]: `%${req.query.nombre}%` },
        },
        order: [["precio", "ASC"]],
      });
      res.json(producto);
    } catch (error) {
      console.log(error);
    }
  },
};
