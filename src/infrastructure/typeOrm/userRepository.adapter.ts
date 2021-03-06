import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../domain/borders/usersRepository.interface';
import { EntityManager, Repository } from 'typeorm';
import { User } from '../../core/entities/user.entity';
import { UserSchema } from './user.schema';

@Injectable()
export class UserRepositoryAdapter implements IUsersRepository {
  private readonly userRepository: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepository = em.getRepository(UserSchema);
  }

  findAll(): any {
    return null;
  }

  findById(id: number): any {
    return null;
  }

  remove(id: number): any {
    return null;
  }

  update(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
  ): any {
    return null;
  }
}
