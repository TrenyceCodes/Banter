import { Request, Response } from 'express';
/**
 *
 * @param request
 * @param response
 */
declare const createRoom: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
declare const getRooms: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
declare const getRoomById: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteRoomById: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
export { createRoom, getRooms, getRoomById, deleteRoomById };
//# sourceMappingURL=RoomController.d.ts.map