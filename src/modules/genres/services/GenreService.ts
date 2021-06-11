import { AppError } from '@shared/errors/AppError';
import { CreateGenreDTO } from '../dtos/create-genre.dto';
import { Genre, IGenre } from '../infra/mongoose/models/genre.model';
import { UpdateGenreDTO } from '../dtos/update-genre.dto';

export class GenreService {
  public async list(): Promise<IGenre[]> {
    const genres = Genre.find();

    return genres;
  }

  public async findById(id: string): Promise<IGenre | null> {
    const genre = await Genre.findById(id);

    if (!genre) {
      throw new AppError('Genre not found.', 404);
    }

    return genre;
  }

  public async create(data: CreateGenreDTO): Promise<IGenre> {
    const genre = await Genre.create(data);

    return genre;
  }

  public async update(id: string, data: UpdateGenreDTO): Promise<IGenre> {
    const genre = await Genre.findById(id);

    if (!genre) {
      throw new AppError('Genre not found.');
    }

    Object.assign(genre, data);

    await genre.save();

    return genre;
  }

  public async delete(id: string): Promise<void> {
    await Genre.findByIdAndDelete(id);
  }
}
