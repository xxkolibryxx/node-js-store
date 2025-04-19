import { Router } from "express";
import { dashboardPage } from "../../controller/admin/static-controller.js";
const router = Router();
router.get('/', dashboardPage);
router.get('/dashboard', dashboardPage);

export { router as adminStaticRoutes }