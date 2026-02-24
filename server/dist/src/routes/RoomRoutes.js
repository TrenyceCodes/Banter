"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomRoutes = void 0;
const express_1 = require("express");
const RoomController_1 = require("../controller/RoomController");
exports.roomRoutes = (0, express_1.Router)();
exports.roomRoutes.post("/", RoomController_1.createRoom);
exports.roomRoutes.get("/:roomId", RoomController_1.getRoomById);
exports.roomRoutes.get("/", RoomController_1.getRooms);
exports.roomRoutes.delete("/:roomId", RoomController_1.deleteRoomById);
//# sourceMappingURL=RoomRoutes.js.map