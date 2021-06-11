import { IBookInstance } from '../infra/mongoose/models/book-instance.model';

export interface UpdateBookInstanceDTO {
  book: string;
  imprint: IBookInstance['imprint'];
  status: IBookInstance['status'];
  dueBack: string;
}
