import { Router } from 'express';

import { BookInstancesController } from '../controllers/BookInstancesController';

export const bookInstancesRouter = Router();
const bookInstancesController = new BookInstancesController();

bookInstancesRouter.get('/', bookInstancesController.index);

bookInstancesRouter.get('/:id', bookInstancesController.show);

bookInstancesRouter.post('/', bookInstancesController.create);

bookInstancesRouter.put('/:id', bookInstancesController.update);

bookInstancesRouter.delete('/:id', bookInstancesController.delete);
