module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";
    let cols = {
      nombre: {
        type: dataTypes.STRING,
      },
      correo: {
        type: dataTypes.STRING,
      },
      contrasena: {
        type: dataTypes.STRING,
      },
      avatar_url: {
        type: dataTypes.STRING,
      },
    };
    let config = {
      tableName: "usuarios",
      timestamps: false,
    };
    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
  };
  