module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categorias', [
        { id: 1, nombre: 'Electrónicos' },
        { id: 2, nombre: 'Ropa' },
        // Puedes agregar más categorías según sea necesario
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categorias', null, {});
    }
  };
  