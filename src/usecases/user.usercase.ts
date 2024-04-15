import { IUserSchema } from "../adapters/interfaces/IUserSchema";
import { IUserCase } from "../adapters/interfaces/IUserUsecase";
import { userRepository } from "../frameworks/repositories/user.repo";
import { UserEntity } from "../entity/user.entity";
import twilio from "twilio";
import { Request } from "express";
// const authToken = process.env.authID;
// const accountSid = process.env.accountSid;
// const client = require("twilio")(accountSid, authToken);

export class UserUsecase implements IUserCase {
  constructor(private UserRepository: userRepository) {}

  async register(user: UserEntity): Promise<void> {
    return this.UserRepository.register(user);
  }

  async login(data: UserEntity): Promise<void> {
    return this.UserRepository.login(data);
  }

  async changePassword(data: any): Promise<void> {
    return this.UserRepository.changePassword(data);
  }

  async editUser(userId: string, data: UserEntity, req: any): Promise<void> {
    return this.UserRepository.editUser(userId, data, req);
  }

  async sosAlert(data: UserEntity): Promise<void> {
    client.messages
      .create({
        body: "hi hello",
        from: "+12515720398",
        to: "+916238691742",
      })
      .then((message: any) => console.log(message.sid))
      .done();
  }
}
