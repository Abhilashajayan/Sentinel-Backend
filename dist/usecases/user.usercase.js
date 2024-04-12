"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUsecase = void 0;
class UserUsecase {
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }
    async register(user) {
        return this.UserRepository.register(user);
    }
    async login(data) {
        return this.UserRepository.login(data);
    }
    async changePassword(data) {
        return this.UserRepository.changePassword(data);
    }
    async editUser(userId, data, req) {
        return this.UserRepository.editUser(userId, data, req);
    }
}
exports.UserUsecase = UserUsecase;
//# sourceMappingURL=user.usercase.js.map