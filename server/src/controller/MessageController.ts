import { Request, Response } from "express"
import { prisma } from "../../lib/prisma";

//createMessage
/**
 * Creates a message 
 * @param request - the request from express.js that handles incoming messages 
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns creates a message connected to users id and room id
 */
const createMessage = async(request: Request, response: Response) => {
    const {roomId, username, message, sender} = request.body;
    const chatroomID = Number(roomId);
    const senderID = Number(sender);

    if (isNaN(chatroomID)) {
        return response.status(400).json({"message": "Invalid Room ID"});
    }

    if (isNaN(senderID)) {
        return response.status(400).json({"message": "Invalid sender ID"});
    }

    try {
        const newMessage = await prisma.messages.create({
            data: {
                sender: senderID,
                message: message,
                username: username,
                roomId: chatroomID
            }
        });

        return response.status(200).json({"message": `New message in room ${chatroomID} by sender ${senderID}`, "messageContent": newMessage});
    } catch (error) {
        return response.status(400).json({"message": `New message unable to be created in room ${chatroomID}`, "error": error});
    }
}

export { createMessage }