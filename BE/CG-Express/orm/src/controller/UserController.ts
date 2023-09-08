import { Request, Response } from "express";
import userService from "../service/UserService";

class UserController {
    register = async (req: Request, res: Response) => {
        try {
            await userService.register(req.body);
            res.status(201).json('Create user success')
        }
        catch (error) {
            res.status(500).json(error);
        }
    };

    login = async (req: Request, res: Response) => {
        try {
            let resultUser = await userService.checkUser(req.body);
            res.status(201).json(resultUser);
        }
        catch (error) {
            res.status(500).json(error);
        }
    }

    
}

export default new UserController();
