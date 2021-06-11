import mongoose, { Schema, Document } from 'mongoose';
import { differenceInYears } from 'date-fns';

export interface IAuthor extends Document {
  _id: string;
  firstName: string;
  familyName: string;
  dateOfBirth: Date;
  dateOfDeath?: Date;
  name: string;
  lifespan: string;
  url: string;
}

const AuthorSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    familyName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    dateOfDeath: { type: Date, required: false },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

AuthorSchema.virtual('name').get(function (this: IAuthor) {
  return `${this.familyName}, ${this.firstName}`;
});

AuthorSchema.virtual('lifespan').get(function (this: IAuthor) {
  const diffInYears = differenceInYears(
    this.dateOfDeath || new Date(),
    this.dateOfBirth,
  );

  return `${diffInYears} years${!this.dateOfDeath ? ' (alive)' : ''}`;
});

AuthorSchema.virtual('url').get(function (this: IAuthor) {
  return `/authors/${this.id}`;
});

export const Author = mongoose.model<IAuthor>('Author', AuthorSchema);
