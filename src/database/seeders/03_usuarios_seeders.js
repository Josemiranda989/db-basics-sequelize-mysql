module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('usuarios', [
        { id: 1, nombre: 'Usuario1', correo: 'usuario1@email.com', contrasena: 'contraseña1' },
        { id: 2, nombre: 'Usuario2', correo: 'usuario2@email.com', contrasena: 'contraseña2' },
        // Puedes agregar más usuarios según sea necesario
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('usuarios', null, {});
    }
  };
  