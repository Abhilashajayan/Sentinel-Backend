import { IUserSchema } from "../adapters/interfaces/IUserSchema";
import { IUserCase } from "../adapters/interfaces/IUserUsecase";
import { userRepository } from "../frameworks/repositories/user.repo";
import { UserEntity } from "../entity/user.entity";
import twilio from "twilio";
import { Request } from "express";
const authToken = '2c21b4ee121b1b51ca5587078776f020';
const accountSid = process.env.accountSid;
const client = twilio(accountSid, authToken);

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

  async sosAlert(data: UserEntity): Promise<any> {
    try {
      console.log(data);
      const body = `Alert! I'm in danger\tLocation: ${data.allergies} \t: ${data.address}\tBlood group: ${data.bloodType}`;
      console.log(body);
        const message = await client.messages.create({
            body: body,
            from: '+12515720398',
            to: '+918111942818'
        });
        console.log("SOS message sent successfully with SID:", message.sid);
    } catch (error) {
        console.error("Error sending SOS message:", error);

        if (error.status === 401) {
            console.error("Twilio authentication failed. Check your credentials.");
        }
    }
}

}