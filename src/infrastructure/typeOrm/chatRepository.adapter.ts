import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IChatRepository } from '../../domain/borders/chatRepository.interface';
import { EntityManager, Repository } from 'typeorm';
import { Chat } from '../../chat/entities/chat.entity';
import { ChatSchema } from './chat.schema';

@Injectable()
export class ChatRepositoryAdapter implements IChatRepository {
  private readonly chatRepository: Repository<Chat>;

  constructor(private readonly em: EntityManager) {
    this.chatRepository = em.getRepository(ChatSchema);
  }

  create(userId: string, firstName: string, text: string, room: string): any {
    const message = this.chatRepository.save({
      userId: userId,
      firstName: firstName,
      text: text,
      room: room,
    });

    if (message) {
      return message;
    }

    throw new HttpException(
      {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Message could not be saved',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  findAll(): Promise<Chat[]> {
    return this.chatRepository.find();
  }

  findOne(id: number): Promise<Chat> {
    const findById = this.chatRepository.findOneBy({
      uuid: id.toString(),
    });

    if (findById) {
      return findById;
    }

    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: `Message with id ${id} not found`,
      },
      HttpStatus.NOT_FOUND,
    );
  }

  async remove(id: number): Promise<Chat> {
    const deleteResult = await this.chatRepository
      .createQueryBuilder()
      .delete()
      .from(Chat)
      .where('uuid = :id', { id: id })
      .execute();

    if (deleteResult) {
      return deleteResult as unknown as Chat;
    }

    throw new HttpException(
      {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Message could not be removed',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
