import path from 'path';
import { promisify } from 'util';
import fs from 'fs';

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

    async delete(req, res) {
        const file = await File.findByPk(req.params.id);

        promisify(fs.unlink)(
            path.resolve(
                __dirname,
                '..',
                '..',
                '..',
                'tmp',
                'uploads',
                file.path
            )
        );

        await file.destroy();
        return res.send();
    }
}

export default new FileController();
