import { Router } from "express";
import { adminProductRoutes } from "./admin/product-routes.js";
import { adminStaticRoutes } from "./admin/static-routes.js";

const router = Router();

router.use('/', adminStaticRoutes)
router.use('/products', adminProductRoutes)

export { router as adminRoutes }