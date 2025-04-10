import { Router } from "express";
import { productSingle, productPage } from '../controller/product-controller.js'

const router = Router();

router.get('/', productPage)
router.get('/:id', productSingle)

export { router as productRoutes }