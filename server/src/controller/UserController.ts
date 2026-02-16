import {Request, Response} from 'express';
import { prisma } from "../../lib/prisma";

// registers user
const registerUser = async(request: Request, response: Response) => {
    const {username, email, password} = request.body;

    try {
        const user = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: password
            }
        })

        response.status(200).json({"message": "User added successfully", "user": user});
    } catch (error) {
        response.status(400).json({"message": "Unsuccessful in creating user", "error": error});
    }
    
}

//finds user by id
const findUserById = async (request: Request, response: Response) => {
    const {id} = await request.params;

    try {
        const foundUser = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        })

        if (foundUser != null) {
           response.status(200).json({"message": "found user", "username": foundUser});
        }

        response.status(200).json({"message": "User not found"});
    } catch (error) {
       response.status(400).json({"message": "Unsuccessful in finding user", "error": error}); 
    }

}

// gets all users
const allUsers = async (request: Request, response: Response) => {
    try {
        const listOfUsers = await prisma.user.findMany();

        if (listOfUsers.length > 0) {
            response.status(200).json({"message": "list of users", "users": listOfUsers}); 
        }
       
        response.status(200).json({"message": "no users found"});
    } catch (error) {
       response.status(400).json({"message": "No users found", "error": error}); 
    }
}

// delete user by id
const deleteUserById = async (request: Request, response: Response) => {
    const {id} = await request.params;

    try {
        const deletedUser = await prisma.user.delete({
            where: {
                id: Number(id)
            }
        })
        deletedUser ? response.status(200).json({"message": "Found id", "id": id, "user": deletedUser}) : null;
    } catch (error) {
       response.status(400).json({"message": "No users found to delete", "error": error});  
    }

}

export { registerUser, findUserById, allUsers, deleteUserById }