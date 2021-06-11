import { IBookInstance } from '../infra/mongoose/models/book-instance.model';

export interface CreateBookInstanceDTO {
  book: string;
  imprint: IBookInstance['imprint'];
  status: IBookInstance['status'];
  dueBack: string;
}
