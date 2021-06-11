import { Request, Response } from 'express';

import { GenreService } from '@modules/genres/services/GenreService';

import { container } from 'tsyringe';

export class GenresController {
  public async index(request: Request, response: Response): Promise<Response> {
    const genreService = container.resolve(GenreService);

    const genres = await genreService.list();

    return response.json(genres);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const genreService = container.resolve(GenreService);

    const genre = await genreService.findById(id);

    return response.json(genre);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const genreService = container.resolve(GenreService);

    const genre = await genreService.create(request.body);

    return response.json(genre);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const genreService = container.resolve(GenreService);

    const genre = await genreService.update(id, request.body);

    return response.json(genre);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const genreService = container.resolve(GenreService);

    await genreService.delete(id);

    return response.status(204).send();
  }
}
