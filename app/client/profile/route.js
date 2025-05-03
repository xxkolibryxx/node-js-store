import { Router } from "express";
import { profilePage } from "./controller.js";

const router = Router()
router.get('/', profilePage)

export { router as profileRoutes }