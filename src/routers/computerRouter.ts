import { Router } from "express";
import { showAllCpu, showAllGpu, showAllMotherboards } from "../controllers/computerController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const computerRouter = Router()

computerRouter.get("/create/motherboard", validateToken, showAllMotherboards)
computerRouter.get("/create/gpu", validateToken, showAllGpu)
computerRouter.get("/create/cpu", validateToken, showAllCpu)

export default computerRouter