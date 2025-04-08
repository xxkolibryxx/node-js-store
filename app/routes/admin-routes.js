import { Router } from "express";
import { addProductPage } from '../controller/product-controller.js'

const router = Router();

router.get('/products/add-product', addProductPage);

export { router as adminRoutes }