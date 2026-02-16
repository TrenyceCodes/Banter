import { Router } from 'express';
import { allUsers, deleteUserById, findUserById, loginUser, registerUser } from '../controller/UserController';

export const userRoutes = Router();

userRoutes.post("/registerUser", registerUser);
userRoutes.post("/loginUser", loginUser);
userRoutes.get("/:id", findUserById);
userRoutes.get("/", allUsers);
userRoutes.delete("/delete/:id", deleteUserById)