import { Request, Response } from "express";
import { UserUsecase } from "../../usecases/user.usercase";

export class UserController {
  private readonly userUsecase: UserUsecase;
  constructor(userUsecase: UserUsecase) {
    this.userUsecase = userUsecase;
  }


  async editUser(req: Request, res: Response) {
    try {
      const userId: string = req.params.userId;
      const data = req.body;
      const dataUser = await this.userUsecase.editUser(userId, data, req);
      return res.status(200).json({ dataUser });
    } catch (error) {
      res.status(500).send("Error while adding address");
      console.log("Error while adding => ", error);
    }
  }

  async reg_User(req: Request, res: Response) {
    try {
      const userData = req.body;
      console.log(userData);  
      const users = await this.userUsecase.register(userData);
      return res.status(200).json({ users });
    } catch (error) {
      res.status(500).send("Error while adding address");
      console.log("Error while adding => ", error);
    }
  }

  async login_User(req: Request, res: Response) {
    try {
      const userData = req.body;
      console.log(userData);  
      const users = await this.userUsecase.login(userData);
      return res.status(200).json({ users });
    } catch (error) {
      res.status(500).send("Error while adding address");
      console.log("Error while adding => ", error);
    }
  }

}
