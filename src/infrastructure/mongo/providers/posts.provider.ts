import { Connection } from 'mongoose';
import { PostSchema } from '../schema/post.schema';
import {
  MONGO_DATABASE_CONNECTION,
  POST_MODEL,
} from '../../../common/cave.constants';

export const PostsProvider = [
  {
    provide: POST_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Post', PostSchema),
    inject: [MONGO_DATABASE_CONNECTION],
  },
];
