import userRouter from "./userRouter.js";
import { Router } from "express"

const router = Router()
 
router.use(userRouter)

export default router