import File from '../models/File';

class FileController {
    async index(req, res) {
        const { page = 1 } = req.query;

        const files = await File.findAll({
            attributes: ['id', 'name', 'url', 'path'],
            limit: 10,
            offset: (page - 1) * 10,
        });

        return res.json(files);
    }

    async store(req, res) {
        const { originalname: name, filename: path } = req.file;

        const file = await File.create({
            name,
            path,
        });

        return res.json(file);
    }
}

export default new FileController();
