import { Router } from "express";
import { adminStaticRoutes } from "./static-routes.js";
import { productRoutes } from "./product-routes.js";


const router = Router();

router.use('/', adminStaticRoutes)
router.use('/products', productRoutes)

export { router as adminRoutes }