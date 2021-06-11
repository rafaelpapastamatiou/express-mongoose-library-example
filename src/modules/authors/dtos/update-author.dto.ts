import { IAuthor } from '../infra/mongoose/models/author.model';

export interface UpdateAuthorDTO {
  firstName: IAuthor['firstName'];
  familyName: IAuthor['familyName'];
  dateOfBirth: string;
  dateOfDeath?: string;
}
