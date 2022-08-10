import { Router } from "express";
import { showAllProducts } from "../controllers/searchController.js";
import { validateToken } from "../middlewares/authMiddleware.js";


const searchRouter = Router()

searchRouter.get("/home", validateToken ,showAllProducts)

export default searchRouter