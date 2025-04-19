import { Router } from "express";
import { adminStaticRoutes } from "./static-routes.js";
import { adminProductRoutes } from "./product-routes.js";
import { categoryRoutes } from "./category-routes.js";


const router = Router();

router.use('/', adminStaticRoutes)
router.use('/products', adminProductRoutes)
router.use('/category', categoryRoutes)

export { router as adminRoutes }