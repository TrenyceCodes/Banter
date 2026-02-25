"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRoutes = void 0;
const express_1 = require("express");
const MessageController_1 = require("../controller/MessageController");
exports.messageRoutes = (0, express_1.Router)();
exports.messageRoutes.post("/", MessageController_1.createMessage);
exports.messageRoutes.delete("/:id", MessageController_1.deleteMessage);
//# sourceMappingURL=MessageRoutes.js.map