import { Request, Response } from 'express';

import { BookService } from '@modules/books/services/BookService';

import { container } from 'tsyringe';

export class BooksController {
  public async index(request: Request, response: Response): Promise<Response> {
    const bookService = container.resolve(BookService);

    const books = await bookService.list();

    return response.json(books);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bookService = container.resolve(BookService);

    const book = await bookService.findById(id);

    return response.json(book);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const bookService = container.resolve(BookService);

    const book = await bookService.create(request.body);

    return response.json(book);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bookService = container.resolve(BookService);

    const book = await bookService.update(id, request.body);

    return response.json(book);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bookService = container.resolve(BookService);

    await bookService.delete(id);

    return response.status(204).send();
  }
}
