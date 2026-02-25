import { Request, Response } from "express";
/**
 * Creates a message
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns creates a message connected to users id and room id
 */
declare const createMessage: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
export { createMessage };
//# sourceMappingURL=MessageController.d.ts.map