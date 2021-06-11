import { AppError } from '@shared/errors/AppError';
import { CreateAuthorDTO } from '../dtos/create-author.dto';
import { Author, IAuthor } from '../infra/mongoose/models/author.model';
import { UpdateAuthorDTO } from '../dtos/update-author.dto';

export class AuthorService {
  public async list(): Promise<IAuthor[]> {
    const authors = Author.find();

    return authors;
  }

  public async findById(id: string): Promise<IAuthor | null> {
    const author = await Author.findById(id);

    if (!author) {
      throw new AppError('Author not found.', 404);
    }

    return author;
  }

  public async create({
    firstName,
    familyName,
    dateOfBirth,
    dateOfDeath,
  }: CreateAuthorDTO): Promise<IAuthor> {
    const author = await Author.create({
      firstName,
      familyName,
      dateOfBirth: new Date(dateOfBirth),
      dateOfDeath: dateOfDeath ? new Date(dateOfDeath) : undefined,
    });

    return author;
  }

  public async update(id: string, data: UpdateAuthorDTO): Promise<IAuthor> {
    const author = await Author.findById(id);

    if (!author) {
      throw new AppError('Author not found.');
    }

    Object.assign(author, data);

    await author.save();

    return author;
  }

  public async delete(id: string): Promise<void> {
    await Author.findByIdAndDelete(id);
  }
}
