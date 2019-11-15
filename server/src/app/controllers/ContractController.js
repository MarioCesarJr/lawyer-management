import Contract from '../models/Contract';

class ContractController {
    async store(req, res) {
        const contract = await Contract.create(req.body);
        return res.json(contract);
    }
}

export default new ContractController();
