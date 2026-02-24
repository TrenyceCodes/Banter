import { Request, Response } from 'express';
/**
 * Returns if we successfully created user or failed to do so
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns the json response status determining if we succeeded or failed to create the user.
 */
declare const registerUser: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Returns if we successfully logged user in or failed to do so
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns the json response status determining if we succeeded or failed to login the user.
 */
declare const loginUser: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Returns if we successfully found users id
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns the json response status determining if we succeeded or failed to find user by id.
 */
declare const findUserById: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Returns if we successfully got all users from the database
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns the json response status determining if we succeeded or failed to find all users.
 */
declare const allUsers: (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * Returns if we successfully deleted user by id
 * @param request - the request from express.js that handles incoming messages
 * @param response - the response from express.js that handles outputting our api's incoming responses.
 * @returns the json response status determining if we succeeded or failed to delete user by id.
 */
declare const deleteUserById: (request: Request, response: Response) => Promise<Response<any, Record<string, any>> | null>;
export { registerUser, loginUser, findUserById, allUsers, deleteUserById };
//# sourceMappingURL=UserController.d.ts.map