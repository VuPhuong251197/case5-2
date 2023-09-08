import { Router } from "express";
import postController from "../controller/PostController";

const postRouter = Router();

postRouter.get("/", postController.findAll);

postRouter.get("/:id", postController.findById)

postRouter.post("/", postController.add);

postRouter.put("/:id", postController.update);

postRouter.delete("/:id", postController.delete)

export default postRouter;
