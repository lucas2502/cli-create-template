import { CreateUserUseCase } from "./CreateUserUseCase.js";
import { Request, Response } from "express";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory.js";
import { IUsersRepository } from "../../repositories/IUserRepositories.js";
import { CreateUserDTO } from "./CreateUserDTO.js";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { email, type, password, person, company } =
      request.body as CreateUserDTO.Input;

    if (!email || !type || !password || !person || !company) {
      return response.status(400).json({
        message: "Fields are required",
      });
    }

    try {
      await this.createUserUseCase.execute({
        email,
        type,
        password,
        person,
        company,
      });

      return response.status(200).json({
        message: "Registration successful",
      });
    } catch (err: Error | any) {
      if (err?.message === "User already exists.") {
        return response.status(400).json({
          message: err.message,
        });
      }
      return response.status(500).json({
        message: err?.message || "Unexpected error.",
      });
    }
  }
}
