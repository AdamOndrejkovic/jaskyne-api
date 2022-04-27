import { Injectable } from '@nestjs/common';
import { IAuthRepository } from '../../domain/borders/authRepository.interface';
import { EntityManager, Repository } from 'typeorm';
import { User } from '../../core/entities/user.entity';
import { UserSchema } from './user.schema';

@Injectable()
export class AuthRepositoryAdapter implements IAuthRepository {
  private readonly userRepository: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepository = em.getRepository(UserSchema);
  }

  login(email: string, password: string): any {}

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
  ): any {}
}
