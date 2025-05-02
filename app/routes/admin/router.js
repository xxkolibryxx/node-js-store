import { Router } from "express";
import { adminStaticRoutes } from "./static-routes.js";
import { adminProductRoutes } from "./product-routes.js";
import { categoryRoutes } from "./category-routes.js";
import { authRoutes } from "./auth-routes.js";
import { authMiddleware } from "../../middlewares/auth-middleware.js";
import { setUser } from "../../middlewares/set-user-middleware.js";


const router = Router();

router.use('/', adminStaticRoutes)
router.use('/products', authMiddleware, setUser, adminProductRoutes)
router.use('/category', authMiddleware, setUser, categoryRoutes)
router.use('/auth', authRoutes)

export { router as adminRoutes }