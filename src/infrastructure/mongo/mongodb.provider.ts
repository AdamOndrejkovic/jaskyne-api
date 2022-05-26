import * as mongoose from 'mongoose';
import { MONGO_DATABASE_CONNECTION } from '../../common/cave.constants';
import { ConfigService } from '@nestjs/config';

export const MongodbProvider = [
  {
    provide: MONGO_DATABASE_CONNECTION,
    useFactory: async (config: ConfigService): Promise<typeof mongoose> =>
      mongoose.connect(config.get('MONGO_DB')),
  },
];
