"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    dob: { type: Date },
    phone: { type: String },
    profilePicture: { type: String },
    gender: { type: String },
    allergies: { type: [String] },
    emergencyContacts: { type: [{ name: String, phone: String }], default: [] },
    address: { type: String },
    bloodType: { type: String },
    height: { type: String },
    weight: { type: String },
    medication: { type: [String] },
    isPregnant: { type: Boolean },
    isOrganDonor: { type: Boolean },
    createdAt: { type: Date },
    lastLogin: { type: Date }
});
exports.default = mongoose_1.default.model("User", UserSchema);
//# sourceMappingURL=user.model.js.map