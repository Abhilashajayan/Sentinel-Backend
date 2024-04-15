import { Router, Request, Response } from "express";
import { UserController } from "../controllers/user.controllers";
import { userRepository } from "../../frameworks/repositories/user.repo";
import userModel from "../../frameworks/models/user.model";
import { UserUsecase } from "../../usecases/user.usercase";
import multerConfig from "../../frameworks/services/multer";

export class UserRouter {
  router = Router();

  userRepository = new userRepository(userModel);
  userUsecase = new UserUsecase(this.userRepository);
  userController = new UserController(this.userUsecase);

  constructor() {
    this.router.post("/user/register", (req: Request, res: Response) => {
      this.userController.reg_User(req, res);
    });

    this.router.post("/user/login", (req: Request, res: Response) => {
      this.userController.login_User(req, res);
    });

    this.router.post("/user/sos", (req: Request, res: Response) => {
      this.userController.sos_Alert(req, res);
    });

    this.router.post( 
      "/user/editUser/:userId",
      multerConfig.single("uploadPic"),
      (req: Request, res: Response) => {
        this.userController.editUser(req, res);
      }
    );
  }

}

export const userRouter = new UserRouter().router;
