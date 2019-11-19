import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, res) => {
                if (err) return cb(err);

                return cb(
                    null,
                    res.toString('hex') + extname(file.originalname)
                );
            });
        },
    }),
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'application/pdf',
            'application/x-rar-compressed',
            'application/x-tar',
            'image/tiff',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-',
            'officedocument.spreadsheetml.sheet',
            'application/zip',
            'application/x-7z-compressed',
        ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type.'));
        }
    },
};
