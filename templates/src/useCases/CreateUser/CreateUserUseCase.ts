import { User } from "../../entities/User.js";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory.js";
import { CreateUserDTO } from "./CreateUserDTO.js";

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepositoryInMemory) {
    this.usersRepository = usersRepository;
  }

  async execute(data: CreateUserDTO.Input) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (!!userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
