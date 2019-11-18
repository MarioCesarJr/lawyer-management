import { Router } from 'express';

import UserController from './app/controllers/UserController';
import CustomerController from './app/controllers/CustomerController';
import LawsuitController from './app/controllers/LawsuitController';
import ContractController from './app/controllers/ContractController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/customers', CustomerController.store);

routes.post('/lawsuits', LawsuitController.store);
routes.put('/lawsuits/:id', LawsuitController.update);

routes.post('/contracts', ContractController.store);

export default routes;
