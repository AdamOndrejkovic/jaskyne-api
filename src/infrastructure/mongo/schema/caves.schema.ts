import mongoose from 'mongoose';

export const CavesSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  region: String,
  difficulty: String,
  duration: String,
  image: String,
});
