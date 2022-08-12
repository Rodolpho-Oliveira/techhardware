import { Router } from "express";
import { showAllCpu, showAllDrives, showAllFonts, showAllGpu, showAllMotherboards, showAllRam } from "../controllers/computerController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const computerRouter = Router()

computerRouter.get("/create/motherboard", validateToken, showAllMotherboards)
computerRouter.get("/create/gpu", validateToken, showAllGpu)
computerRouter.get("/create/cpu", validateToken, showAllCpu)
computerRouter.get("/create/ram", validateToken, showAllRam)
computerRouter.get("/create/drive", validateToken, showAllDrives)
computerRouter.get("/create/font", validateToken, showAllFonts)

export default computerRouter