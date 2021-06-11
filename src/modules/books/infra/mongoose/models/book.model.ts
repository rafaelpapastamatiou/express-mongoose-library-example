import mongoose, { Schema, Document } from 'mongoose';

import { IAuthor } from '@modules/authors/infra/mongoose/models/author.model';
import { IGenre } from '@modules/genres/infra/mongoose/models/genre.model';

export interface IBook extends Document {
  title: string;
  author: IAuthor;
  genres: IGenre[];
  summary: string;
  isbn: string;
  url: string;
}

const BookSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
      required: true,
    },
    genres: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

BookSchema.virtual('url').get(function (this: IBook) {
  return `/books/${this.id}`;
});

export const Book = mongoose.model<IBook>('Book', BookSchema);
