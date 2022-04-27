import mongoose from 'mongoose';

export const CreatorSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
  },
  { _id: false },
);
