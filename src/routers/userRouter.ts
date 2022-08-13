import { Router } from "express";
import { showUserComputer, signIn, signUp } from "../controllers/userController.js";
import { checkUserInfo, validateToken } from "../middlewares/authMiddleware.js";

const userRouter = Router()

userRouter.post("/", checkUserInfo, signUp)
userRouter.post("/login", checkUserInfo, signIn)
userRouter.get("/user/:id/computers", validateToken, showUserComputer)

export default userRouter