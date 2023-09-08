import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
declare class UserService {
    private userRepository;
    constructor();
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<{
        message: string;
        code: string;
        success: boolean;
        token?: undefined;
        id?: undefined;
        email?: undefined;
        role?: undefined;
    } | {
        token: string;
        id: any;
        email: any;
        role: any;
        success: boolean;
        message?: undefined;
        code?: undefined;
    }>;
    getCurrentUserData: (req: Request) => JwtPayload | null;
}
declare const _default: UserService;
export default _default;
