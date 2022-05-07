import * as bcrypt from 'bcrypt';

export class Pentagon {
  async generateHashedPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const salt = bcrypt.genSalt(saltRounds);
    const hash = bcrypt.hashSync(password, await salt);
    return hash;
  }

  async comparePasswords(
    password: string,
    storedPassword: string,
  ): Promise<boolean> {
    const match = await bcrypt.compare(password, storedPassword);

    if (match) {
      return true;
    }

    return false;
  }
}
