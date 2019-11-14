import { Router } from 'express';

import UserController from './app/controllers/UserController';
import CustomerController from './app/controllers/CustomerController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/customers', CustomerController.store);

export default routes;
