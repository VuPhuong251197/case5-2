"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entity/User");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class UserService {
    constructor() {
        this.register = async (user) => {
            user.createdDate = new Date();
            user.updatedDate = new Date();
            user.password = await bcrypt_1.default.hash(user.password, 10);
            console.log(user);
            return this.userRepository.save(user);
        };
        this.checkUser = async (user) => {
            let userFind = await this.userRepository.findOneBy({ email: user.email });
            if (!userFind) {
                return { message: "User not found with email " + user.email, code: "USER_NOT_EXIST", success: false };
            }
            else {
                let passWordCompare = await bcrypt_1.default.compare(user.password, userFind.password);
                if (passWordCompare) {
                    let payload = {
                        id: userFind.id,
                        email: userFind.email,
                        role: userFind.role
                    };
                    return {
                        token: jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                            expiresIn: 36000 * 10 * 100
                        }),
                        id: userFind.id,
                        email: userFind.email,
                        role: userFind.role,
                        success: true
                    };
                }
                else {
                    return { message: "Incorrect password", code: "INCORRECT_PASSWORD", success: false };
                }
            }
        };
        this.getCurrentUserData = (req) => {
            let authorization = req.headers.authorization;
            let resultPayload = null;
            if (authorization) {
                let accessToken = req.headers.authorization.split(' ')[1];
                if (accessToken) {
                    jsonwebtoken_1.default.verify(accessToken, auth_1.SECRET, (err, payload) => {
                        if (!err && payload.id) {
                            resultPayload = payload;
                        }
                    });
                }
            }
            return resultPayload;
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=UserService.js.map