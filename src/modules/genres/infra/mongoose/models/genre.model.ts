import mongoose, { Schema, Document } from 'mongoose';

export interface IGenre extends Document {
  _id: string;
  name: string;
  url: string;
}

const GenreSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

GenreSchema.virtual('url').get(function (this: IGenre) {
  return `/genres/${this.id}`;
});

export const Genre = mongoose.model<IGenre>('Genre', GenreSchema);
