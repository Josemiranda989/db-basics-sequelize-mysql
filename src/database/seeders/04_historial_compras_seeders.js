module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('historial_compras', [
        { id: 1, usuario_id: 1, producto_id: 1, cantidad: 2, fecha_compra: new Date() },
        { id: 2, usuario_id: 2, producto_id: 2, cantidad: 1, fecha_compra: new Date() },
        // Puedes agregar más registros de historial_compras según sea necesario
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('historial_compras', null, {});
    }
  };
  