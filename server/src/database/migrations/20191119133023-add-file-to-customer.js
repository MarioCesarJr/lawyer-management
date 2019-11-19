module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('lawsuits', 'file_id', {
            type: Sequelize.INTEGER,
            references: { model: 'files', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true,
        });
    },

    down: queryInterface => {
        return queryInterface.removeCollumn('lawsuits', 'file_id');
    },
};
