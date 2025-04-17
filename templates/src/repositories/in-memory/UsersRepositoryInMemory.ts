import { User } from "../../entities/User.js";
import { IUsersRepository } from "../IUserRepositories.js";

export class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string) {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  async save(user: User) {
    this.users.push(user);
    return true;
  }
}
