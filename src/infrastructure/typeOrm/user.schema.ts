import { User } from '../../core/entities/user.entity';
import { EntitySchema } from 'typeorm';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    uuid: {
      type: 'uuid',
      generated: 'uuid',
      primary: true,
    },
    firstName: {
      type: 'varchar',
    },
    lastName: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
    },
    password: {
      type: 'varchar',
    },
    role: {
      type: 'varchar',
    },
  },
  relations: {},
});
