import Sequelize, { Model } from 'sequelize';

class Customer extends Model {
    static init(sequelize) {
        super.init(
            {
                entity: Sequelize.STRING,
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                phone: Sequelize.STRING,
                cpf: Sequelize.STRING,
                rg: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Customer;
