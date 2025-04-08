import { Router } from "express";
import { categorySingle } from "../controller/category-controller.js";

const router = Router();
router.get('/:id', categorySingle)

export { router as categoryRoutes }