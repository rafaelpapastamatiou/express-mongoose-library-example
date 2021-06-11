import mongoose, { Schema, Document } from 'mongoose';

import { IBook } from '@modules/books/infra/mongoose/models/book.model';

export interface IBookInstance extends Document {
  _id: string;
  book: IBook;
  imprint: string;
  status: 'Available' | 'Maintenance' | 'Loaned' | 'Reserved';
  dueBack?: Date;
  url?: string;
}

const BookInstanceSchema: Schema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    imprint: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
      default: 'Maintenance',
    },
    dueBack: { type: Date, default: Date.now },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

BookInstanceSchema.virtual('url').get(function (this: IBookInstance) {
  return `/bookInstance/${this._id}`;
});

export const BookInstance = mongoose.model<IBookInstance>(
  'BookInstance',
  BookInstanceSchema,
);
