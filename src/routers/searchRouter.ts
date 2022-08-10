import { Router } from "express";
import { showAllProducts, showAllProductsByType } from "../controllers/searchController.js";
import { validateToken } from "../middlewares/authMiddleware.js";


const searchRouter = Router()

searchRouter.get("/home", validateToken ,showAllProducts)

searchRouter.get("/home/:type", validateToken ,showAllProductsByType)

export default searchRouter