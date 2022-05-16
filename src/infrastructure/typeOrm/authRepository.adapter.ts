import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { IAuthRepository } from '../../domain/borders/authRepository.interface';
import { EntityManager, Repository } from 'typeorm';
import { User } from '../../core/entities/user.entity';
import { UserSchema } from './user.schema';
import { Pentagon } from '../security/pentagon';

@Injectable()
export class AuthRepositoryAdapter implements IAuthRepository {
  private readonly userRepository: Repository<User>;
  private readonly pentagon: Pentagon;

  constructor(private readonly em: EntityManager) {
    this.userRepository = em.getRepository(UserSchema);
    this.pentagon = new Pentagon();
  }

  async login(email: string, password: string): Promise<User> {
    const user = await this.findUserWithEmail(email);
    if (user == null) {
      throw new NotFoundException('User not found');
    }

    if (await this.pentagon.comparePasswords(password, user.password)) {
      return user;
    }

    throw new UnauthorizedException('Invalid login');
  }

  async register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
  ): Promise<User> {
    console.log('user repo');
    const user = await this.findUserWithEmail(email);
    if (user != null) {
      return null;
    }

    const hashedPassword = await this.pentagon.generateHashedPassword(password);

    return this.userRepository.save({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
      role: role,
    });
  }

  findUserWithEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({
      email: email,
    });
  }
}
