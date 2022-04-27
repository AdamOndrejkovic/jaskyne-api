export interface IAuthRepository {
  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
  ): any;

  login(email: string, password: string): any;
}
