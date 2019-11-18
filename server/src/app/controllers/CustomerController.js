import Customer from '../models/Customer';

class CustomerController {
    async index(req, res) {
        const page = req.query.page || 1;

        const customers = await Customer.findAll({
            limit: 10,
            offset: 10 * page - 10,
        });

        return res.json(customers);
    }

    async store(req, res) {
        const emailExists = await Customer.findOne({
            where: { email: req.body.email },
        });

        if (emailExists) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const cpfExists = await Customer.findOne({
            where: { cpf: req.body.cpf },
        });

        if (cpfExists) {
            return res.status(400).json({ error: 'CPF already exists' });
        }

        const rgExists = await Customer.findOne({
            where: { rg: req.body.rg },
        });

        if (rgExists) {
            return res.status(400).json({ error: 'RG already exists' });
        }

        const customer = await Customer.create(req.body);

        return res.json(customer);
    }

    async update(req, res) {
        const customer = await Customer.findByPk(req.params.id);

        await customer.update(req.body);

        return res.json(customer);
    }

    async delete(req, res) {
        const customer = await Customer.findByPk(req.params.id);

        await customer.destroy();

        return res.send();
    }
}

export default new CustomerController();
