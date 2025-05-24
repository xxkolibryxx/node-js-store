import { Router } from "express";
import { getById, remove } from "./controller.js";

const router = Router()

router.get('/', getById)
router.delete('/:id', remove)

export { router as cartRoutes }