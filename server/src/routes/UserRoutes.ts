import { Router } from 'express';
import { allUsers, deleteUserById, findUserById, registerUser } from '../controller/UserController';

export const userRoutes = Router();

userRoutes.post("/createUser", registerUser);
userRoutes.get("/:id", findUserById);
userRoutes.get("/", allUsers);
userRoutes.delete("/delete/:id", deleteUserById)