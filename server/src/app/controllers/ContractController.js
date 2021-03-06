import Contract from '../models/Contract';
import Customer from '../models/Customer';

class ContractController {
    async index(req, res) {
        const page = req.query.page || 1;

        const contracts = await Contract.findAll({
            include: [{ model: Customer, attributes: ['name'] }],
            limit: 10,
            offset: 10 * page - 10,
        });

        return res.json(contracts);
    }

    async store(req, res) {
        const contract = await Contract.create(req.body);
        return res.json(contract);
    }

    async update(req, res) {
        const contract = await Contract.findByPk(req.params.id);

        await contract.update(req.body);

        return res.json(contract);
    }

    async delete(req, res) {
        const contract = await Contract.findByPk(req.params.id);

        await contract.destroy();

        return res.send();
    }

    async show(req, res) {
        const contract = await Contract.findByPk(req.params.id, {
            include: [
                {
                    model: Customer,
                    attributes: ['name'],
                },
            ],
        });

        if (!contract) {
            return res.status(400).json({ error: 'Contract not found' });
        }

        return res.json(contract);
    }
}

export default new ContractController();
