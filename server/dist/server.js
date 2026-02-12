"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//const PORT:Number | undefined = process.env.PORT;
app.get("/", (request, response) => {
    response.send(`Hello TreNyce ${process.env.PRISMA_DATABASE_URL}`);
});
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
//# sourceMappingURL=server.js.map