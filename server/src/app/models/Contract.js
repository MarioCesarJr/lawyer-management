import Sequelize, { Model } from 'sequelize';

class Contract extends Model {
    static init(sequelize) {
        super.init(
            {
                status: Sequelize.STRING,
                description: Sequelize.STRING,
                initial_date: Sequelize.DATE,
                final_date: Sequelize.DATE,
                value: Sequelize.FLOAT,
                note: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Customer, {
            foreignKey: 'customer_id',
        });
    }
}

export default Contract;
