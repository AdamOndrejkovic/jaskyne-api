import { Connection } from 'mongoose';
import { PostSchema } from '../schema/post.schema';

export const PostsProvider = [
  {
    provide: 'POST_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Post', PostSchema),
    inject: ['MONGO_DATABASE_CONNECTION'],
  },
];
