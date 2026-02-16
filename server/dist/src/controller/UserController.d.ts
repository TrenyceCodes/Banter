import { Request, Response } from 'express';
declare const registerUser: (request: Request, response: Response) => Promise<void>;
declare const findUserById: (request: Request, response: Response) => Promise<void>;
declare const allUsers: (request: Request, response: Response) => Promise<void>;
declare const deleteUserById: (request: Request, response: Response) => Promise<void>;
export { registerUser, findUserById, allUsers, deleteUserById };
//# sourceMappingURL=UserController.d.ts.map