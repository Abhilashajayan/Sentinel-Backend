import { Date, Document } from "mongoose";
interface IEmergencyContact {
    name: string;
    phone: string;
}

export interface IUserSchema extends Document {
    username: string;
    email: string;
    password: string;
    dob: string;
    phone: string; 
    profilePicture: string; 
    gender: string;
    allergies: string[];
    emergencyContacts:IEmergencyContact[]; 
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
