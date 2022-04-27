import { IAuthRepository } from '../borders/authRepository.interface';

export class AuthService {
  private authRepo: IAuthRepository;

  constructor(authRepo: IAuthRepository) {
    this.authRepo = authRepo;
  }

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
  ) {
    return this.authRepo.register(firstName, lastName, email, password, role);
  }

  login(email: string, password: string) {
    return this.authRepo.login(email, password);
  }
}
