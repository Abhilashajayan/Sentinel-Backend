"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userUsecase) {
        this.userUsecase = userUsecase;
    }
    async editUser(req, res) {
        try {
            const userId = req.params.userId;
            console.log(userId);
            const data = req.body;
            console.log(data);
            const dataUser = await this.userUsecase.editUser(userId, data, req);
            return res.status(200).json({ dataUser });
        }
        catch (error) {
            res.status(500).send("Error while adding address");
            console.log("Error while adding => ", error);
        }
    }
    async reg_User(req, res) {
        try {
            const userData = req.body;
            console.log(userData);
            const users = await this.userUsecase.register(userData);
            return res.status(200).json({ users });
        }
        catch (error) {
            res.status(500).send("Error while adding address");
            console.log("Error while adding => ", error);
        }
    }
    async login_User(req, res) {
        try {
            const userData = req.body;
            console.log(userData);
            const users = await this.userUsecase.login(userData);
            return res.status(200).json({ users });
        }
        catch (error) {
            res.status(500).send("Error while adding address");
            console.log("Error while adding => ", error);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controllers.js.map