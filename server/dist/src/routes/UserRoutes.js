"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.post("/registerUser", UserController_1.registerUser);
exports.userRoutes.post("/loginUser", UserController_1.loginUser);
exports.userRoutes.get("/:id", UserController_1.findUserById);
exports.userRoutes.get("/", UserController_1.allUsers);
exports.userRoutes.delete("/delete/:id", UserController_1.deleteUserById);
//# sourceMappingURL=UserRoutes.js.map