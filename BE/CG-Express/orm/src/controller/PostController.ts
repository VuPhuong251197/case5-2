import { Request, Response } from "express";
import postService from "./../service/PostService"
import userService from "./../service/UserService";

class PostController {
    private postService: any;
    private userService: any;
    // dependency injection
    constructor() {
        this.postService = postService;
        this.userService = userService;
    };

    findAll = async (req: Request, res: Response) => {
        try {
            const { userId } = req.query;
            const currentUserData = this.userService.getCurrentUserData(req);
            let listPost = [];
            if (!userId) {
                listPost = await this.postService.findAll(null, null);
            }
            else if (currentUserData === null) {
                listPost = await this.postService.findAll(Number(userId), null);
            } else {
                listPost = await this.postService.findAll(Number(userId), currentUserData.id);
            }
            res.status(200).json(listPost);
        }
        catch (error) {
            res.status(500).json(error);
        }
    };

    findById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const showDetail = await this.postService.findById(id);
            res.status(200).json(showDetail);
        }
        catch (error) {
            res.status(500).json(error);
        }
    }

    add = async (req: Request, res: Response) => {
        try {
            
            let data = await this.postService.add(req.body);
          
            res.status(201).json(data);
        }
        catch (error) {
            console.log(error);
            
            res.status(500).json(error);
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            let data = await this.postService.delete(req.params.id);
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json(error);
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            let data = await this.postService.update(req.params.id, req.body);
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json(error);
        }
    };
}

export default new PostController();