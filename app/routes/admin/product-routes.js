import { Router } from "express";
import { productList } from "../../controller/admin/product-controller.js";

const router = Router();

router.get('/', productList)

export { router as productRoutes }