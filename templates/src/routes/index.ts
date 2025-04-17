import { Router } from "express";
import { Request, Response } from "express";
import { CreateUserController } from "../useCases/CreateUser/CreateUserController.js";
import { UsersRepositoryInMemory } from "../repositories/in-memory/UsersRepositoryInMemory.js";
import { CreateUserUseCase } from "../useCases/CreateUser/CreateUserUseCase.js";

const usersRepository = new UsersRepositoryInMemory();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);
const routes = Router();

routes.post("/registration", async (request: Request, response: Response) => {
  return await createUserController.handle(request, response);
});

routes.get("/registration", (request: Request, response: Response) => {
  return response.json({ message: "Ok!", status: "success" });
});

export { routes };
