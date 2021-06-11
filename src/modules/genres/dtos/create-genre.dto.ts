import { IGenre } from '../infra/mongoose/models/genre.model';

export interface CreateGenreDTO {
  name: IGenre['name'];
}
