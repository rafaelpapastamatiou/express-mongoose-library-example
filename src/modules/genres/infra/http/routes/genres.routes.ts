import { Router } from 'express';

import { GenresController } from '../controllers/GenresController';

export const genresRouter = Router();
const genresController = new GenresController();

genresRouter.get('/', genresController.index);

genresRouter.get('/:id', genresController.show);

genresRouter.post('/', genresController.create);

genresRouter.put('/:id', genresController.update);

genresRouter.delete('/:id', genresController.delete);
