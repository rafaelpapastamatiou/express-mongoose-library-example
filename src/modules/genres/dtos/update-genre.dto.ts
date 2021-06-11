import { IGenre } from '../infra/mongoose/models/genre.model';

export interface UpdateGenreDTO {
  name: IGenre['name'];
}
