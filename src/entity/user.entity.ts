export class UserEntity {
    public readonly id: string;
    public readonly username: string;
    public readonly email: string;
    public readonly password: string;
    public readonly dob: string;
    public readonly phone: string;
    public readonly profilePicture: string;
    public readonly gender: string;
    public readonly allergies: string[]; 
    public readonly emergencyContacts: { name: string, phone: string }[]; 
    public readonly address: string; 
    public readonly bloodType: string; 
    public readonly height: string; 
    public readonly weight: string;
    public readonly medication: string[];
    public readonly isPregnant: boolean; 
    public readonly isOrganDonor: boolean; 
    public readonly createdAt: Date;
    public readonly lastLogin: Date; 

    constructor(
        id: string,
        username: string,
        email: string,
        password: string,
        dob: string,
        phone: string,
        profilePicture: string,
        gender: string,
        allergies: string[],
        emergencyContacts: { name: string, phone: string }[], 
        address: string,
        bloodType: string,
        height: string,
        weight: string,
        medication: string[],
        isPregnant: boolean,
        isOrganDonor: boolean,
        createdAt: Date,
        lastLogin: Date
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.dob = dob;
        this.phone = phone;
        this.profilePicture = profilePicture;
        this.gender = gender;
        this.allergies = allergies;
        this.emergencyContacts = emergencyContacts; 
        this.address = address;
        this.bloodType = bloodType;
        this.height = height;
        this.weight = weight;
        this.medication = medication;
        this.isPregnant = isPregnant;
        this.isOrganDonor = isOrganDonor;
        this.createdAt = createdAt;
        this.lastLogin = lastLogin;
    }
}
