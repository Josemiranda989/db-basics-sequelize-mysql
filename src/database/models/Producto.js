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
    categoria_id: {
      type: dataTypes.INTEGER,
      references: {
        model: "Categorias",
        key: "id",
      },
    },
  };
  let config = {
    tableName: "productos",
    timestamps: false,
  };
  const Producto = sequelize.define(alias, cols, config);
  
  return Producto;
};

