import { Module } from '@nestjs/common';
import { ChatService } from '../domain/services/chat.service';
import { ChatGateway } from './chat.gateway';

@Module({
  providers: [ChatGateway, ChatService],
})
export class ChatModule {}
