import mongoose, { Mongoose } from 'mongoose';

export const createConnection = (): Promise<Mongoose> => {
  return mongoose.connect(
    process.env.DB_URL || 'mongodb://localhost:27017/library',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
  );
};
