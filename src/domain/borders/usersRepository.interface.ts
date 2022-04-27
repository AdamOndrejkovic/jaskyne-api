export interface IUsersRepository {
  findAll(): any;

  findById(id: number): any;

  update(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
  ): any;

  remove(id: number): any;
}
