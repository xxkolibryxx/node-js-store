import { Router } from "express"
import { productRoutes } from "./product-routes.js"
import { homeRoutes } from "./static-routes.js"
import { categoryRoutes } from "./category-routes.js"
import { adminRoutes } from "./admin-routes.js"

const router = Router()
router.use('/', homeRoutes)
router.use('/products', productRoutes)
router.use('/category', categoryRoutes)
router.use('/admin', adminRoutes)

export { router }