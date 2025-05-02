import { Router } from "express";
import { dashboardPage } from "../../controller/admin/static-controller.js";
import { authMiddleware } from "../../middlewares/auth-middleware.js";
import { setUser } from "../../middlewares/set-user-middleware.js";
const router = Router();
router.get('/', authMiddleware, setUser, dashboardPage);
router.get('/dashboard', authMiddleware, setUser, dashboardPage);

export { router as adminStaticRoutes }