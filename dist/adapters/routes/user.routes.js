"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = exports.UserRouter = void 0;
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const user_repo_1 = require("../../frameworks/repositories/user.repo");
const user_model_1 = __importDefault(require("../../frameworks/models/user.model"));
const user_usercase_1 = require("../../usecases/user.usercase");
const multer_1 = __importDefault(require("../../frameworks/services/multer"));
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.userRepository = new user_repo_1.userRepository(user_model_1.default);
        this.userUsecase = new user_usercase_1.UserUsecase(this.userRepository);
        this.userController = new user_controllers_1.UserController(this.userUsecase);
        this.router.post("/user/register", (req, res) => {
            this.userController.reg_User(req, res);
        });
        this.router.post("/user/login", (req, res) => {
            this.userController.login_User(req, res);
        });
        this.router.post("/user/editUser/:userId", multer_1.default.single("uploadPic"), (req, res) => {
            this.userController.editUser(req, res);
        });
    }
}
exports.UserRouter = UserRouter;
exports.userRouter = new UserRouter().router;
//# sourceMappingURL=user.routes.js.map