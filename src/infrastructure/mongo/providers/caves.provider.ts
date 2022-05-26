import { Connection } from 'mongoose';
import { CavesSchema } from '../schema/caves.schema';
import {
  CAVES_MODEL,
  MONGO_DATABASE_CONNECTION,
} from '../../../common/cave.constants';

export const CavesProvider = [
  {
    provide: CAVES_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Caves', CavesSchema),
    inject: [MONGO_DATABASE_CONNECTION],
  },
];
