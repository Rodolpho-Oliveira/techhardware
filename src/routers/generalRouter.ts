import { Router } from "express"
import userRouter from "./userRouter.js";
import searchRouter from "./searchRouter.js";
import productRouter from "./productRouter.js";

const router = Router()
 
router.use(userRouter)
router.use(searchRouter)
router.use(productRouter)

export default router