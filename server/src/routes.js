import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import CustomerController from './app/controllers/CustomerController';
import LawsuitController from './app/controllers/LawsuitController';
import ContractController from './app/controllers/ContractController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.get('/customers', CustomerController.index);
routes.post('/customers', CustomerController.store);
routes.put('/customers/:id', CustomerController.update);
routes.delete('/customers/:id', CustomerController.delete);
routes.get('/customers/:id', CustomerController.show);

routes.get('/lawsuits', LawsuitController.index);
routes.post('/lawsuits', LawsuitController.store);
routes.put('/lawsuits/:id', LawsuitController.update);
routes.delete('/lawsuits/:id', LawsuitController.delete);
routes.get('/lawsuits/:id', LawsuitController.show);

routes.get('/contracts', ContractController.index);
routes.post('/contracts', ContractController.store);
routes.put('/contracts/:id', ContractController.update);
routes.delete('/contracts/:id', ContractController.delete);
routes.get('/contracts/:id', ContractController.show);

routes.post('/files', upload.single('file'), (req, res) => {
    return res.json({ ok: true });
});

export default routes;
