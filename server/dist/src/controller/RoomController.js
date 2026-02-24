"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoomById = exports.getRoomById = exports.getRooms = exports.createRoom = void 0;
const prisma_1 = require("../../lib/prisma");
//create Room 
/**
 *
 * @param request
 * @param response
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