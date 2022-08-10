import { Router } from "express";
import { signUp } from "../controllers/userController.js";
import { checkUserInfo } from "../middlewares/authMiddleware.js";

const userRouter = Router()

userRouter.post("/", checkUserInfo, signUp)

export default userRouter