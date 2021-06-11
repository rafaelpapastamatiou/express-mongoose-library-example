import { Request, Response } from 'express';

import { AuthorService } from '@modules/authors/services/AuthorService';

import { container } from 'tsyringe';

export class AuthorsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const authorService = container.resolve(AuthorService);

    const authors = await authorService.list();

    return response.json(authors);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const authorService = container.resolve(AuthorService);

    const author = await authorService.findById(id);

    return response.json(author);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const authorService = container.resolve(AuthorService);

    const author = await authorService.create(request.body);

    return response.json(author);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const authorService = container.resolve(AuthorService);

    const author = await authorService.update(id, request.body);

    return response.json(author);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const authorService = container.resolve(AuthorService);

    await authorService.delete(id);

    return response.status(204).send();
  }
}
