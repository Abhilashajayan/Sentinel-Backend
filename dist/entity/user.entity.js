"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(id, username, email, password, dob, phone, profilePicture, gender, allergies, emergencyContacts, address, bloodType, height, weight, medication, isPregnant, isOrganDonor, createdAt, lastLogin) {
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
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map