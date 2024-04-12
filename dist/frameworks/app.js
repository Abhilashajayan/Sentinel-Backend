"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const nocache_1 = __importDefault(require("nocache"));
const database_conn_1 = require("./database/database.conn");
const user_routes_1 = require("../adapters/routes/user.routes");
const app = (0, express_1.default)();
const port = 3003;
app.use((0, cors_1.default)());
app.use((0, nocache_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, database_conn_1.dbConnection)();
app.use(user_routes_1.userRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=app.js.map