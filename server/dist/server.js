"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const models_1 = __importDefault(require("./models"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
const PORT = Number(process.env.PORT);
app.get("/", async (request, response) => {
    try {
        await models_1.default.authenticate();
        response.json({ message: "Successfully connected to database" });
    }
    catch (error) {
        response.status(500).json({ message: "Unable to connect to database.", error });
    }
});
app.post("/createUser", async (request, response) => {
    const { username, email, password } = request.body;
    response.json({ "username": username, "email": email, "password": password });
});
app.listen(PORT, async () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
//# sourceMappingURL=server.js.map