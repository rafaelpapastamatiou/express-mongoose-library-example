import { AppError } from '@shared/errors/AppError';
import { CreateBookInstanceDTO } from '../dtos/create-book-instance.dto';
import {
  BookInstance,
  IBookInstance,
} from '../infra/mongoose/models/book-instance.model';
import { UpdateBookInstanceDTO } from '../dtos/update-book-instance.dto';

export class BookInstanceService {
  public async list(): Promise<IBookInstance[]> {
    const bookInstances = BookInstance.find().populate('book');

    return bookInstances;
  }

  public async findById(id: string): Promise<IBookInstance | null> {
    const bookInstance = await BookInstance.findById(id).populate('book');

    if (!bookInstance) {
      throw new AppError('Book instance not found.', 404);
    }

    return bookInstance;
  }

  public async create(data: CreateBookInstanceDTO): Promise<IBookInstance> {
    const bookInstance = await BookInstance.create(data);

    return bookInstance;
  }

  public async update(
    id: string,
    data: UpdateBookInstanceDTO,
  ): Promise<IBookInstance> {
    const bookInstance = await BookInstance.findById(id);

    if (!bookInstance) {
      throw new AppError('Book instance not found.');
    }

    Object.assign(bookInstance, data);

    await bookInstance.save();

    return bookInstance;
  }

  public async delete(id: string): Promise<void> {
    await BookInstance.findByIdAndDelete(id);
  }
}
