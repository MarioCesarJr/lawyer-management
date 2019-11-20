import Sequelize, { Model } from 'sequelize';

class Lawsuit extends Model {
    static init(sequelize) {
        super.init(
            {
                folder: Sequelize.STRING,
                title: Sequelize.STRING,
                description: Sequelize.STRING,
                note: Sequelize.STRING,
                protocol_date: Sequelize.DATE,
                labor_court: Sequelize.INTEGER,
                court_hearing: Sequelize.INTEGER,
                last_movement: Sequelize.STRING,
                last_movement_date: Sequelize.DATE,
                last_check: Sequelize.DATE,
                stopped_days: Sequelize.INTEGER,
                process_time: Sequelize.INTEGER,
                last_contact: Sequelize.STRING,
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
        this.belongsTo(models.File, {
            foreignKey: 'file_id',
        });
    }
}

export default Lawsuit;
