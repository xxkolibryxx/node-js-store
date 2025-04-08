import { Router } from "express";
import { homePage, contactPage } from "../controller/static-controller.js";

const router = Router();
router.get('/', homePage)
router.get('/contact', contactPage)
export { router as homeRoutes }