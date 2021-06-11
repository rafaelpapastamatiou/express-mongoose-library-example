import { Request, Response } from 'express';

import { BookInstanceService } from '@modules/bookInstances/services/BookInstanceService';

import { container } from 'tsyringe';

export class BookInstancesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const bookInstanceService = container.resolve(BookInstanceService);

    const bookInstances = await bookInstanceService.list();

    return response.json(bookInstances);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bookInstanceService = container.resolve(BookInstanceService);

    const bookInstance = await bookInstanceService.findById(id);

    return response.json(bookInstance);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const bookInstanceService = container.resolve(BookInstanceService);

    const bookInstance = await bookInstanceService.create(request.body);

    return response.json(bookInstance);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bookInstanceService = container.resolve(BookInstanceService);

    const bookInstance = await bookInstanceService.update(id, request.body);

    return response.json(bookInstance);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bookInstanceService = container.resolve(BookInstanceService);

    await bookInstanceService.delete(id);

    return response.status(204).send();
  }
}
