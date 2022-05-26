import { Module } from '@nestjs/common';
import { ChatService } from '../domain/services/chat.service';
import { ChatGateway } from './chat.gateway';
import { ChatRepositoryAdapter } from '../infrastructure/typeOrm/chatRepository.adapter';
import { IChatRepository } from '../domain/borders/chatRepository.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatSchema } from '../infrastructure/typeOrm/chat.schema';
import { CHAT_REPOSITORY, CHAT_SERVICE } from '../common/cave.constants';

@Module({
  imports: [TypeOrmModule.forFeature([ChatSchema])],
  providers: [
    {
      provide: CHAT_REPOSITORY,
      useClass: ChatRepositoryAdapter,
    },
    {
      inject: [CHAT_REPOSITORY],
      provide: CHAT_SERVICE,
      useFactory: (chatRepository: IChatRepository) => {
        return new ChatService(chatRepository);
      },
    },
    ChatGateway,
  ],
})
export class ChatModule {}
