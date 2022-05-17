import { IChatRepository } from '../borders/chatRepository.interface';

export class ChatService {
  constructor(private readonly chatRepo: IChatRepository) {}

  create(userId: string, firstName: string, text: string, room: string) {
    return this.chatRepo.create(userId, firstName, text, room);
  }

  findAll() {
    return this.chatRepo.findAll();
  }

  findOne(id: number) {
    return this.chatRepo.findOne(id);
  }

  remove(id: number) {
    return this.chatRepo.remove(id);
  }
}
