"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const cloudinary_1 = __importDefault(require("../services/cloudinary"));
class userRepository {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async register(user) {
        try {
            console.log("user repo", user);
            const password = user.password;
            const hashedPassword = await bcrypt_1.default.hash(password, 10);
            const newUser = new this.UserModel({
                ...user,
                password: hashedPassword,
            });
            await newUser.save();
            console.log(newUser);
        }
        catch (error) {
            console.error("Registration failed:", error);
            throw new Error("Registration failed");
        }
    }
    async login(data) {
        try {
            console.log("check user");
            const email = data.email;
            const password = data.password;
            const user = await this.UserModel.findOne({ email: email }).exec();
            if (user) {
                const passwordMatch = await bcrypt_1.default.compare(password, user.password);
                if (passwordMatch) {
                    console.log("Login successful");
                    return user;
                }
                else {
                    return { message: "invalid password" };
                }
            }
            else {
                return { message: "user not found" };
            }
        }
        catch (error) {
            console.error("Login failed:", error);
            throw new Error("Login failed");
        }
    }
    async editUser(userId, data, req) {
        try {
            console.log(req.file, "the request");
            if (req.file) {
                const folderName = "sentinel";
                const result = await cloudinary_1.default.uploader.upload(req.file.path, {
                    public_id: `${folderName}/${req.file.originalname}`,
                });
                const updatedUserWithImage = await this.UserModel.findOneAndUpdate({ _id: userId }, {
                    $set: {
                        ...data,
                        profilePicture: result?.secure_url,
                    },
                }, { new: true });
                console.log("Cloudinary result:", result);
                console.log("Updated user with image:", updatedUserWithImage);
                return updatedUserWithImage;
            }
            else {
                const updatedUserWithoutImage = await this.UserModel.findOneAndUpdate({ _id: userId }, {
                    $set: {
                        ...data,
                    },
                }, { new: true });
                console.log("Updated user without image:", updatedUserWithoutImage);
                return updatedUserWithoutImage;
            }
        }
        catch (error) {
            console.error("Editing user failed:", error);
            throw new Error("Error while editing user");
        }
    }
    async changePassword(data) {
        try {
            const { email, password } = data;
            console.log(data, "the data");
            const user = await this.UserModel.findOne({ email });
            if (!user) {
                console.error("User not found");
                throw new Error("User not found");
            }
            const hashedPassword = await bcrypt_1.default.hash(password, 10);
            user.password = hashedPassword;
            await user.save();
            console.log("Password changed successfully for user:", user);
            return true;
        }
        catch (error) {
            console.error("Failed to change password:", error);
            throw new Error("Failed to change password");
        }
    }
}
exports.userRepository = userRepository;
//# sourceMappingURL=user.repo.js.map