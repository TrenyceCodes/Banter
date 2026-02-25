import { Request, Response } from "express";
/**
 * Creates a message
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns creates a message connected to users id and room id
 */
declare const createMessage: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Deletes message by it's id
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns deleted message and it's id
 */
declare const deleteMessage: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
export { createMessage, deleteMessage };
//# sourceMappingURL=MessageController.d.ts.map