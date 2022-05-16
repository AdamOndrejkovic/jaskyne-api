import { User } from '../../core/entities/user.entity';

export interface IAuthRepository {
  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
  ): Promise<User>;

  login(email: string, password: string): Promise<User>;
}
