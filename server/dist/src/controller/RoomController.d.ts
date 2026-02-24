import { Request, Response } from 'express';
/**
 * Returns a newly created room
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns the json response status determining if we succeeded of failed in creating a room with members
 */
declare const createRoom: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Returns if we successfully got all rooms
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns the json response status determining if all rooms and room members show or not
 */
declare const getRooms: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Returns if we successfully got room and room members by id
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns the json response status determining if designated room and room members is shown by id
 */
declare const getRoomById: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Allows us to update room name by it's id
 * @param request  - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns Returns if we successfully updated room name by id
 */
declare const updateRoomName: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Returns if we successfully deleted room and room members by id
 * @param request
 * @param response
 * @returns
 */
declare const deleteRoomById: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
export { createRoom, getRooms, getRoomById, deleteRoomById, updateRoomName };
//# sourceMappingURL=RoomController.d.ts.map