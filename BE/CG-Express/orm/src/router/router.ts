import {Router} from "express";
import userRouter from "./UserRouter";
import postRouter from "./PostRouter";

const router = Router();

router.use('/', userRouter);

router.use('/posts', postRouter);
export default router;
