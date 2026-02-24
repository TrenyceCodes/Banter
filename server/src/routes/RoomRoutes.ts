import { Router } from "express";
import { createRoom, deleteRoomById, getRoomById, getRooms, updateRoomName } from "../controller/RoomController";

export const roomRoutes = Router();

roomRoutes.post("/", createRoom);
roomRoutes.get("/:roomId", getRoomById);
roomRoutes.get("/", getRooms);
roomRoutes.put("/:roomId", updateRoomName);
roomRoutes.delete("/:roomId", deleteRoomById);