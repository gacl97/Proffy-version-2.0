import { Router } from 'express';

import ClassController from '../controllers/ClassController';

const classController = new ClassController();

const classRoutes = Router();

classRoutes.post('/', classController.create);
classRoutes.get('/teachers', classController.index);

export default classRoutes;
