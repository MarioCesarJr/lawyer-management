import Lawsuit from '../models/Lawsuit';

class LawsuitController {
    async store(req, res) {
        const lawsuit = await Lawsuit.create(req.body);
        return res.json(lawsuit);
    }
}

export default new LawsuitController();
