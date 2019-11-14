import Sequelize, { Model } from 'sequelize';

class Lawsuit extends Model {
    static init(sequelize) {
        super.init(
            {
                folder: Sequelize.STRING,
                title: Sequelize.STRING,
                description: Sequelize.STRING,
                note: Sequelize.STRING,
                responsible_id: Sequelize.INTEGER,
                customer_id: Sequelize.INTEGER,
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
        });
        this.belongsTo(models.Customer, {
            foreignKey: 'customer_id',
        });
    }
}

export default Lawsuit;
