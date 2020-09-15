import { Router } from 'express';

import classRoutes from './class.routes';

const routes = Router();

routes.use('/class', classRoutes);

export default routes;
