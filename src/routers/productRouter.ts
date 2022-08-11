import { Router } from "express";
import { getSpecs } from "../controllers/productController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const productRouter = Router()

productRouter.get("/product/:id", validateToken, getSpecs)

export default productRouter