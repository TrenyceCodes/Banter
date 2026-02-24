"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRoomName = exports.deleteRoomById = exports.getRoomById = exports.getRooms = exports.createRoom = void 0;
const prisma_1 = require("../../lib/prisma");
//create Room 
/**
 * Returns a newly created room
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns the json response status determining if we succeeded of failed in creating a room with members
 */
const createRoom = async (request, response) => {
    const { chatRoomTitle, chatRoomCreatorId, users } = await request.body;
    try {
        let usersInRoom = [];
        for (let i = 0; i < users.length; i++) {
            usersInRoom.push(Number(users[i]));
        }
        const room = await prisma_1.prisma.room.create({
            data: {
                chatRoomTitle: chatRoomTitle,
                chatRoomCreatorId: Number(chatRoomCreatorId),
            }
        });
        for (let u = 0; u < usersInRoom.length; u++) {
            await prisma_1.prisma.roomMembers.createMany({
                data: { roomId: room.id, userId: Number(usersInRoom[u]) }
            });
        }
        return response.status(200).json({ "message": "room is created", "room": room });
    }
    catch (error) {
        return response.status(400).json({ "message": "Error in creating room", "error": error });
    }
};
exports.createRoom = createRoom;
//get all rooms
/**
 * Returns if we successfully got all rooms
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns the json response status determining if all rooms and room members show or not
 */
const getRooms = async (request, response) => {
    try {
        const listOfRooms = await prisma_1.prisma.room.findMany();
        const listOfRoomMembers = await prisma_1.prisma.roomMembers.findMany();
        if (listOfRooms.length > 0) {
            return response.status(200).json({ "message": "list of rooms", "rooms": listOfRooms, "roomMembers": listOfRoomMembers });
        }
        return response.status(200).json({ "message": "no rooms found" });
    }
    catch (error) {
        return response.status(400).json({ "message": "No rooms found", "error": error });
    }
};
exports.getRooms = getRooms;
// get room by id
/**
 * Returns if we successfully got room and room members by id
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns the json response status determining if designated room and room members is shown by id
 */
const getRoomById = async (request, response) => {
    const { roomId } = await request.params;
    try {
        const currentRoom = await prisma_1.prisma.room.findUnique({
            where: {
                id: Number(roomId)
            }
        });
        const currentRoomMembers = await prisma_1.prisma.roomMembers.findMany({
            where: {
                roomId: Number(roomId)
            }
        });
        if (currentRoom != null) {
            return response.status(200).json({ "message": "found room", "current room": currentRoom, "current room users": currentRoomMembers });
        }
        return response.status(200).json({ "message": "room not found" });
    }
    catch (error) {
        return response.status(400).json({ "message": "Unsuccessful in finding room", "error": error });
    }
};
exports.getRoomById = getRoomById;
// update room name
/**
 * Allows us to update room name by it's id
 * @param request  - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns Returns if we successfully updated room name by id
 */
const updateRoomName = async (request, response) => {
    const { roomId } = await request.params;
    const { chatRoomTitle } = await request.body;
    const roomIdNumber = Number(roomId);
    if (isNaN(roomIdNumber)) {
        return response.status(400).json({ "message": "Invalid room id" });
    }
    try {
        const roomName = await prisma_1.prisma.room.update({
            where: { id: roomIdNumber },
            data: {
                chatRoomTitle: chatRoomTitle
            }
        });
        return response.status(200).json({ "message": `room ${roomIdNumber} has been successfully updated`, "room": roomName });
    }
    catch (error) {
        return response.status(400).json({ "message": `room ${roomIdNumber} has an error in updating`, "error": error });
    }
};
exports.updateRoomName = updateRoomName;
//delete room by id
/**
 * Returns if we successfully deleted room and room members by id
 * @param request
 * @param response
 * @returns
 */
const deleteRoomById = async (request, response) => {
    const { roomId } = await request.params;
    const roomIdNumber = Number(roomId);
    if (isNaN(roomIdNumber)) {
        return response.status(400).json({ "message": "Invalid room id" });
    }
    try {
        const [deletedRoomMembers, deletedRoom] = await prisma_1.prisma.$transaction([
            prisma_1.prisma.roomMembers.deleteMany({
                where: {
                    roomId: roomIdNumber
                }
            }),
            prisma_1.prisma.room.delete({
                where: {
                    id: roomIdNumber
                }
            })
        ]);
        return response.status(200).json({ "message": "Found id", "id": roomId, "room": deletedRoom, "roomMembers": deletedRoomMembers });
    }
    catch (error) {
        return response.status(400).json({ "message": "No rooms found to delete", "error": error });
    }
};
exports.deleteRoomById = deleteRoomById;
//# sourceMappingURL=RoomController.js.map