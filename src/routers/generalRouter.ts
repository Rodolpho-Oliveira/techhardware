import { Router } from "express"
import userRouter from "./userRouter.js";
import searchRouter from "./searchRouter.js";

const router = Router()
 
router.use(userRouter)
router.use(searchRouter)

export default router