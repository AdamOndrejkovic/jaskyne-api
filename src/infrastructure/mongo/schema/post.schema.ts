import mongoose from 'mongoose';
import { CreatorSchema } from './creator.schema';

export const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  createBy: CreatorSchema,
});
