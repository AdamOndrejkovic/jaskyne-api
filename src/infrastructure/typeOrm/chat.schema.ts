import { EntitySchema } from 'typeorm';
import { Chat } from '../../chat/entities/chat.entity';

export const ChatSchema = new EntitySchema<Chat>({
  name: 'Chat',
  target: Chat,
  columns: {
    uuid: {
      type: 'uuid',
      generated: 'uuid',
      primary: true,
    },
    userId: {
      type: 'uuid',
    },
    firstName: {
      type: 'varchar',
    },
    text: {
      type: 'varchar',
    },
    room: {
      type: 'varchar',
    },
  },
  relations: {},
});
