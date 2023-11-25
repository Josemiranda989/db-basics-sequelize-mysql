module.exports = (sequelize, dataTypes) => {
  let alias = "Productos";
  let cols = {
    nombre: {
      type: dataTypes.STRING,
    },
    precio: {
      type: dataTypes.INTEGER,
    },
    imagen: {
      type: dataTypes.STRING,
    },
    categoria_id: { //podemos excluirlo para llamarlo en la asociacion
      type: dataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "productos",
    timestamps: false,
  };
  const Producto = sequelize.define(alias, cols, config);

  Producto.associate = function(models) {
    Producto.belongsTo(models.Categorias, { as: "categoria", foreignKey: "categoria_id" });
    Producto.hasMany(models.HistorialCompras, { as: 'historialCompras', foreignKey: 'producto_id' });
  };

  return Producto;
};
