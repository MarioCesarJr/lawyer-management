import Sequelize, { Model } from 'sequelize';

class Case extends Model {
    static init(sequelize) {
        super.init(
            {
                folder: Sequelize.STRING,
                title: Sequelize.STRING,
                description: Sequelize.STRING,
                note: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'responsible_id',
            as: 'responsible',
        });
        this.belongsTo(models.Customer, {
            foreignKey: 'customer_id',
            as: 'customer',
        });
    }
}

export default Case;
