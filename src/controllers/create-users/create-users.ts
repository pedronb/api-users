import { User } from "../../models/user";
import { badRequest, created } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { CreateUserParams, ICreateUserRepository } from "./protocols";

import validator from "validator";

export class CreateUserController implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      // validar os campos obrigatorios
      const requiredFields = ["firstName", "lastName", "email", "password"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateUserParams]?.length) {
          return badRequest(`Field ${field} is required`);
        }
      }

      // validar se body existe
      if (!httpRequest.body) {
        return badRequest("Please specify a body");
      }

      const emailIsValid = validator.isEmail(httpRequest.body.email);

      if (!emailIsValid) {
        return badRequest("E-mail is invalid");
      }

      const { body } = httpRequest;

      const user = await this.createUserRepository.createUser(body);

      return created<User>(user);
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong!",
      };
    }
  }
}
