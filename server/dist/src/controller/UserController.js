"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.allUsers = exports.findUserById = exports.loginUser = exports.registerUser = void 0;
const prisma_1 = require("../../lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
// registers user
const registerUser = async (request, response) => {
    const { username, email, password } = request.body;
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt_1.default.hash(password, saltRounds);
        const user = await prisma_1.prisma.user.create({
            data: {
                username: username,
                email: email,
                password: hashedPassword
            }
        });
        response.status(200).json({ "message": "User added successfully", "user": user });
    }
    catch (error) {
        response.status(400).json({ "message": "Unsuccessful in creating user", "error": error });
    }
};
exports.registerUser = registerUser;
//login user
const loginUser = async (request, response) => {
    const { email, password } = request.body;
    try {
        const foundUser = await prisma_1.prisma.user.findFirst({
            where: {
                email: email
            }
        });
        if (!foundUser) {
            response.status(404).send("User not found.");
        }
        const passwordMatch = await bcrypt_1.default.compare(password, foundUser.password);
        if (!passwordMatch) {
            response.status(401).json({ message: "Incorrect password." });
        }
        response.status(200).json({
            message: "User logged in successfully.",
            user: foundUser
        });
    }
    catch (error) {
        console.error("Error logging in user:", error);
        response.status(500).json({ message: "An error occurred while logging in." });
    }
};
exports.loginUser = loginUser;
//finds user by id
const findUserById = async (request, response) => {
    const { id } = await request.params;
    try {
        const foundUser = await prisma_1.prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });
        if (foundUser != null) {
            response.status(200).json({ "message": "found user", "username": foundUser });
        }
        response.status(200).json({ "message": "User not found" });
    }
    catch (error) {
        response.status(400).json({ "message": "Unsuccessful in finding user", "error": error });
    }
};
exports.findUserById = findUserById;
// gets all users
const allUsers = async (request, response) => {
    try {
        const listOfUsers = await prisma_1.prisma.user.findMany();
        if (listOfUsers.length > 0) {
            response.status(200).json({ "message": "list of users", "users": listOfUsers });
        }
        response.status(200).json({ "message": "no users found" });
    }
    catch (error) {
        response.status(400).json({ "message": "No users found", "error": error });
    }
};
exports.allUsers = allUsers;
// delete user by id
const deleteUserById = async (request, response) => {
    const { id } = await request.params;
    try {
        const deletedUser = await prisma_1.prisma.user.delete({
            where: {
                id: Number(id)
            }
        });
        deletedUser ? response.status(200).json({ "message": "Found id", "id": id, "user": deletedUser }) : null;
    }
    catch (error) {
        response.status(400).json({ "message": "No users found to delete", "error": error });
    }
};
exports.deleteUserById = deleteUserById;
//# sourceMappingURL=UserController.js.map