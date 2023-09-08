"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
class UserController {
    constructor() {
        this.register = async (req, res) => {
            try {
                await UserService_1.default.register(req.body);
                res.status(201).json('Create user success');
            }
            catch (error) {
                res.status(500).json(error);
            }
        };
        this.login = async (req, res) => {
            try {
                let resultUser = await UserService_1.default.checkUser(req.body);
                res.status(201).json(resultUser);
            }
            catch (error) {
                res.status(500).json(error);
            }
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map