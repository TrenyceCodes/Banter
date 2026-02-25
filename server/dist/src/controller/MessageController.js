"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.createMessage = void 0;
const prisma_1 = require("../../lib/prisma");
//createMessage
/**
 * Creates a message
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns creates a message connected to users id and room id
 */
const createMessage = async (request, response) => {
    const { roomId, username, message, sender } = request.body;
    const chatroomID = Number(roomId);
    const senderID = Number(sender);
    if (isNaN(chatroomID)) {
        return response.status(400).json({ "message": "Invalid Room ID" });
    }
    if (isNaN(senderID)) {
        return response.status(400).json({ "message": "Invalid sender ID" });
    }
    try {
        const newMessage = await prisma_1.prisma.messages.create({
            data: {
                sender: senderID,
                message: message,
                username: username,
                roomId: chatroomID
            }
        });
        return response.status(200).json({ "message": `New message in room ${chatroomID} by sender ${senderID}`, "messageContent": newMessage });
    }
    catch (error) {
        return response.status(400).json({ "message": `New message unable to be created in room ${chatroomID}`, "error": error });
    }
};
exports.createMessage = createMessage;
//deleteMessage
/**
 * Deletes message by it's id
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns deleted message and it's id
 */
const deleteMessage = async (request, response) => {
    const { id } = await request.params;
    try {
        const deletedMessage = await prisma_1.prisma.messages.delete({
            where: {
                id: Number(id)
            }
        });
        return response.status(200).json({ "message": "Found id", "id": id, "deleted_message": deletedMessage });
    }
    catch (error) {
        return response.status(400).json({ "message": "No messages found to delete", "error": error });
    }
};
exports.deleteMessage = deleteMessage;
//# sourceMappingURL=MessageController.js.map