import { Router } from "express";
import { createRoom, deleteRoomById, getRoomById, getRooms } from "../controller/RoomController";

export const roomRoutes = Router();

roomRoutes.post("/", createRoom);
roomRoutes.get("/:roomId", getRoomById);
roomRoutes.get("/", getRooms);
roomRoutes.delete("/:roomId", deleteRoomById);