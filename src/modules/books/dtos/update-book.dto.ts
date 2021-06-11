import { IBook } from '../infra/mongoose/models/book.model';

export interface UpdateBookDTO {
  title: IBook['title'];
  summary: IBook['summary'];
  isbn: IBook['isbn'];
  author: string;
  genres: string[];
}
