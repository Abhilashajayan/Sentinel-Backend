import mongoose, { Schema, Document } from "mongoose";
import { IUserSchema } from "../../adapters/interfaces/IUserSchema";

const UserSchema = new Schema<IUserSchema>({
    id: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    dob: { type: Date },
    phone: { type: String },
    profilePicture: { type: String },
    gender: { type: String },
    allergies: { type: [String] },
    emergencyContacts: { type: String },
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

export default mongoose.model<IUserSchema & Document>("User", UserSchema);
