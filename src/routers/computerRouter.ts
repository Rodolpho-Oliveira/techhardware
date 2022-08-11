import { Router } from "express";
import { showAllCpu, showAllGpu, showAllMotherboards, showAllRam } from "../controllers/computerController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const computerRouter = Router()

computerRouter.get("/create/motherboard", validateToken, showAllMotherboards)
computerRouter.get("/create/gpu", validateToken, showAllGpu)
computerRouter.get("/create/cpu", validateToken, showAllCpu)
computerRouter.get("/create/ram", validateToken, showAllRam)

export default computerRouter