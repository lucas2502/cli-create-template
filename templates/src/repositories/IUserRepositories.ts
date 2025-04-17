import { User } from "../entities/User";

interface IUsersRepository {
  findByEmail(email: User["email"]): Promise<User | undefined>;
  save(user: User): Promise<boolean>;
}

export { IUsersRepository };
