import { Router } from "express";
import { list, update, updatePage } from "./controller.js";
import { validateMiddleware } from "../../middlewares/validate-middleware.js";
import validation from "./validation.js";

const { updateSchema } = validation

const router = Router();
router.get('/', list)
router.get('/update/:id', updatePage)
router.post('/update', validateMiddleware(updateSchema), update)

export { router as orderRoutes }