import { Router } from "express";
import { createMessage, deleteMessage } from "../controller/MessageController";

export const messageRoutes = Router();

messageRoutes.post("/", createMessage);
messageRoutes.delete("/:id", deleteMessage);