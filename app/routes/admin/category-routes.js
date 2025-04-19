import { Router } from "express";
import { addNewCategory } from "../../controller/admin/category-controller.js";

const router = Router();
router.post('/add-new', addNewCategory)

export { router as categoryRoutes }