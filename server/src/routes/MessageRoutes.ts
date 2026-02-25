import { Router } from "express";
import { createMessage } from "../controller/MessageController";

export const messageRoutes = Router();

messageRoutes.post("/", createMessage);