import {Router} from "express";
import userController from "../controller/UserController";

const userRouter = Router();
userRouter.post("/sign-up", userController.register);

userRouter.post("/sign-in", userController.login);
export default userRouter;
