module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('contracts', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            status: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            initial_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            final_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            value: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            note: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            customer_id: {
                type: Sequelize.INTEGER,
                references: { model: 'customers', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('contracts');
    },
};
