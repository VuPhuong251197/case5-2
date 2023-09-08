"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostService_1 = __importDefault(require("./../service/PostService"));
const UserService_1 = __importDefault(require("./../service/UserService"));
class PostController {
    constructor() {
        this.findAll = async (req, res) => {
            try {
                const { userId } = req.query;
                const currentUserData = this.userService.getCurrentUserData(req);
                let listPost = [];
                if (!userId) {
                    listPost = await this.postService.findAll(null, null);
                }
                else if (currentUserData === null) {
                    listPost = await this.postService.findAll(Number(userId), null);
                }
                else {
                    listPost = await this.postService.findAll(Number(userId), currentUserData.id);
                }
                res.status(200).json(listPost);
            }
            catch (error) {
                res.status(500).json(error);
            }
        };
        this.findById = async (req, res) => {
            try {
                const { id } = req.params;
                const showDetail = await this.postService.findById(id);
                res.status(200).json(showDetail);
            }
            catch (error) {
                res.status(500).json(error);
            }
        };
        this.add = async (req, res) => {
            try {
                let data = await this.postService.add(req.body);
                res.status(201).json(data);
            }
            catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        };
        this.delete = async (req, res) => {
            try {
                let data = await this.postService.delete(req.params.id);
                res.status(200).json(data);
            }
            catch (error) {
                res.status(500).json(error);
            }
        };
        this.update = async (req, res) => {
            try {
                let data = await this.postService.update(req.params.id, req.body);
                res.status(200).json(data);
            }
            catch (error) {
                res.status(500).json(error);
            }
        };
        this.postService = PostService_1.default;
        this.userService = UserService_1.default;
    }
    ;
}
exports.default = new PostController();
//# sourceMappingURL=PostController.js.map