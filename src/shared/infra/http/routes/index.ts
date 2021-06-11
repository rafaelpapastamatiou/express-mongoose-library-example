import { Router } from 'express';

import { authorsRouter } from '@modules/authors/infra/http/routes/authors.routes';
import { genresRouter } from '@modules/genres/infra/http/routes/genres.routes';
import { booksRouter } from '@modules/books/infra/http/routes/books.routes';
import { bookInstancesRouter } from '@modules/bookInstances/infra/http/routes/book-instances.routes';

const routes = Router();

routes.use('/authors', authorsRouter);
routes.use('/genres', genresRouter);
routes.use('/books', booksRouter);
routes.use('/bookInstances', bookInstancesRouter);

export default routes;
