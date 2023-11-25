module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('categorias', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nombre: {
          type: Sequelize.STRING(50),
        },
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('categorias');
    }
  };
  