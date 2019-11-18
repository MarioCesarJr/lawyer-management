import Lawsuit from '../models/Lawsuit';
import Customer from '../models/Customer';
import User from '../models/User';

class LawsuitController {
    async index(req, res) {
        const page = req.query.page || 1;

        const lawsuits = await Lawsuit.findAll({
            include: [
                { model: Customer },
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
            limit: 10,
            offset: 10 * page - 10,
        });

        return res.json(lawsuits);
    }

    async store(req, res) {
        const lawsuit = await Lawsuit.create(req.body);
        return res.json(lawsuit);
    }

    async update(req, res) {
        const lawsuit = await Lawsuit.findByPk(req.params.id);

        await lawsuit.update(req.body);

        return res.json(lawsuit);
    }

    async delete(req, res) {
        const lawsuit = await Lawsuit.findByPk(req.params.id);

        await lawsuit.destroy();

        return res.send();
    }

    async show(req, res) {
        const lawsuit = await Lawsuit.findByPk(req.params.id, {
            include: [
                {
                    model: Customer,
                    attributes: ['name'],
                },
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        if (!lawsuit) {
            return res.status(400).json({ error: 'Lawsuit not found' });
        }

        return res.json(lawsuit);
    }
}

export default new LawsuitController();
