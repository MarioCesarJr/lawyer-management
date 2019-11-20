module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('lawsuits', 'protocol_date', {
                type: Sequelize.DATE,
                allowNull: true,
            }),
            queryInterface.addColumn('lawsuits', 'labor_court', {
                type: Sequelize.INTEGER,
                allowNull: true,
            }),
            queryInterface.addColumn('lawsuits', 'court_hearing', {
                type: Sequelize.INTEGER,
                allowNull: true,
            }),
            queryInterface.addColumn('lawsuits', 'last_movement', {
                type: Sequelize.STRING,
                allowNull: true,
            }),
            queryInterface.addColumn('lawsuits', 'last_movement_date', {
                type: Sequelize.DATE,
                allowNull: true,
            }),
            queryInterface.addColumn('lawsuits', 'last_check', {
                type: Sequelize.DATE,
                allowNull: true,
            }),
            queryInterface.addColumn('lawsuits', 'stopped_days', {
                type: Sequelize.INTEGER,
                allowNull: true,
            }),
            queryInterface.addColumn('lawsuits', 'process_time', {
                type: Sequelize.INTEGER,
                allowNull: true,
            }),
            queryInterface.addColumn('lawsuits', 'last_contact', {
                type: Sequelize.STRING,
                allowNull: true,
            }),
        ]);
    },

    down: queryInterface => {
        return Promise.all([
            queryInterface.removeColumn('lawsuits', 'protocol_date'),
            queryInterface.removeColumn('lawsuits', 'labor_court'),
            queryInterface.removeColumn('lawsuits', 'court_hearing'),
            queryInterface.removeColumn('lawsuits', 'last_movement'),
            queryInterface.removeColumn('lawsuits', 'last_movement_date'),
            queryInterface.removeColumn('lawsuits', 'last_check'),
            queryInterface.removeColumn('lawsuits', 'stopped_days'),
            queryInterface.removeColumn('lawsuits', 'process_time'),
            queryInterface.removeColumn('lawsuits', 'last_contact'),
        ]);
    },
};
