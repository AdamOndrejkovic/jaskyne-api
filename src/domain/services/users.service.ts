import { IUsersRepository } from '../borders/usersRepository.interface';

export class UsersService {
  constructor(private readonly userRepo: IUsersRepository) {}

  findAll() {
    return this.userRepo.findAll();
  }

  findOne(id: number) {
    return this.userRepo.findById(id);
  }

  update(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
  ) {
    return this.userRepo.update(id, firstName, lastName, email, password, role);
  }

  remove(id: number) {
    return this.userRepo.remove(id);
  }
}
