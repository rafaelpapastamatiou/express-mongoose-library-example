import { AppError } from '@shared/errors/AppError';
import { CreateBookDTO } from '../dtos/create-book.dto';
import { Book, IBook } from '../infra/mongoose/models/book.model';
import { UpdateBookDTO } from '../dtos/update-book.dto';

export class BookService {
  public async list(): Promise<IBook[]> {
    const books = Book.find().populate(['author', 'genres']);

    return books;
  }

  public async findById(id: string): Promise<IBook | null> {
    const book = await Book.findById(id).populate(['author', 'genres']);

    if (!book) {
      throw new AppError('Book not found.', 404);
    }

    return book;
  }

  public async create(data: CreateBookDTO): Promise<IBook> {
    const book = await Book.create(data);

    return book;
  }

  public async update(id: string, data: UpdateBookDTO): Promise<IBook> {
    const book = await Book.findById(id);

    if (!book) {
      throw new AppError('Book not found.');
    }

    Object.assign(book, data);

    await book.save();

    return book;
  }

  public async delete(id: string): Promise<void> {
    await Book.findByIdAndDelete(id);
  }
}
