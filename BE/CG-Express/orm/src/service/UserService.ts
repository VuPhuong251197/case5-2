import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import bcrypt from "bcrypt"
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import { SECRET } from "../middleware/auth";
import { Request } from "express";

class UserService {
    private userRepository: any;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    register = async (user: any) => {
        user.createdDate = new Date();
        user.updatedDate = new Date();
        user.password = await bcrypt.hash(user.password, 10);
        console.log(user)
        return this.userRepository.save(user)
    }

    checkUser = async (user: any) => {
        let userFind = await this.userRepository.findOneBy({ email: user.email });
        if (!userFind) {
            return { message: "User not found with email " + user.email, code: "USER_NOT_EXIST", success: false }
        }
        else {
            let passWordCompare = await bcrypt.compare(user.password, userFind.password);
            if (passWordCompare) {
                let payload = {
                    id: userFind.id,
                    email: userFind.email,
                    role: userFind.role
                }
                return {
                    token: jwt.sign(payload, SECRET, {
                        expiresIn: 36000 * 10 * 100
                    }),
                    id: userFind.id,
                    email: userFind.email,
                    role: userFind.role,
                    success: true
                }
            }
            else {
                return { message: "Incorrect password", code: "INCORRECT_PASSWORD", success: false }
            }
        }
    }

    getCurrentUserData = (req: Request): JwtPayload | null => {
        let authorization = req.headers.authorization;
        let resultPayload = null;
        if (authorization) {
            let accessToken = req.headers.authorization.split(' ')[1];
            if (accessToken) {
                jwt.verify(accessToken, SECRET, (err: VerifyErrors | null, payload: JwtPayload) => {
                    if (!err && payload.id) {
                        resultPayload = payload
                    }
                })
            }
        }
        return resultPayload;
    }
}

export default new UserService();
