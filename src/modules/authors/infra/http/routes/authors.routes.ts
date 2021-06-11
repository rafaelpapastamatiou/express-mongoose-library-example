import { Router } from 'express';

import { AuthorsController } from '../controllers/AuthorsController';

export const authorsRouter = Router();
const authorsController = new AuthorsController();

authorsRouter.get('/', authorsController.index);

authorsRouter.get('/:id', authorsController.show);

authorsRouter.post('/', authorsController.create);

authorsRouter.put('/:id', authorsController.update);

authorsRouter.delete('/:id', authorsController.delete);
