"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnection = async () => {
    let uri = process.env.MONGO_URI;
    try {
        mongoose_1.default.set('strictQuery', true);
        await mongoose_1.default.connect(uri);
        console.log('Database is connected');
    }
    catch (err) {
        console.error('Connection failed:', err);
    }
};
exports.dbConnection = dbConnection;
//# sourceMappingURL=database.conn.js.map