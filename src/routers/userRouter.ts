import { Router } from "express";
import { signIn, signUp } from "../controllers/userController.js";
import { checkUserInfo } from "../middlewares/authMiddleware.js";

const userRouter = Router()

userRouter.post("/", checkUserInfo, signUp)
userRouter.post("/login", checkUserInfo, signIn)

export default userRouter