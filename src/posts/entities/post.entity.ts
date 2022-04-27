import { Document } from 'mongoose';

export class Post extends Document {
  private readonly title: string;
  private readonly description: string;
  private readonly date: string;
  private readonly createdBy: {
    id: string;
    name: string;
  };
}
