import { Connection } from 'mongoose';
import { CavesSchema } from '../schema/caves.schema';

export const CavesProvider = [
  {
    provide: 'CAVES_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Caves', CavesSchema),
    inject: ['MONGO_DATABASE_CONNECTION'],
  },
];
