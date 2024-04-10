import { Date, Document } from "mongoose";

export interface IUserSchema extends Document {
    id: string;
    username: string;
    email: string;
    password: string;
    dob: Date;
    phone: string; 
    profilePicture: string; 
    gender: string;
    allergies: string[];
    emergencyContacts:string; 
    address: string; 
    bloodType: string; 
    height: string; 
    weight: string; 
    medication: string[]; 
    isPregnant: boolean; 
    isOrganDonor: boolean; 
    createdAt: Date;
    lastLogin: Date;
}
