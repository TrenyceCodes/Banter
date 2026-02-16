"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.allUsers = exports.findUserById = exports.registerUser = void 0;
const prisma_1 = require("../../lib/prisma");
// registers user
const registerUser = async (request, response) => {
    const { username, email, password } = request.body;
    try {
        const user = await prisma_1.prisma.user.create({
            data: {
                username: username,
                email: email,
                password: password
            }
        });
        response.status(200).json({ "message": "User added successfully", "user": user });
    }
    catch (error) {
        response.status(400).json({ "message": "Unsuccessful in creating user", "error": error });
    }
};
exports.registerUser = registerUser;
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