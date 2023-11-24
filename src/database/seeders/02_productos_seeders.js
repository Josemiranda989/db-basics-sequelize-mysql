module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('productos', [
        { id: 1, nombre: 'Laptop', precio: 1200.50, categoria_id: 1 },
        { id: 2, nombre: 'Camiseta', precio: 25.99, categoria_id: 2 },
        // Puedes agregar más productos según sea necesario
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('productos', null, {});
    }
  };
  