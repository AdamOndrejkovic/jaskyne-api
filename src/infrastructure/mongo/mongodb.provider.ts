import * as mongoose from 'mongoose';
import { MONGO_DATABASE_CONNECTION } from '../../common/cave.constants';

export const MongodbProvider = [
  {
    provide: MONGO_DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.MONGO_DB),
  },
];
