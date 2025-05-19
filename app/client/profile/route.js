import { Router } from "express";
import { orderPage, profilePage, settingsPage, updateSettings } from "./controller.js";
import { enforceSelfOnly } from "../../middlewares/enforce-self-only-middleware.js";

const router = Router()
router.get('/', profilePage)
router.get('/orders', orderPage)
router.get('/settings', settingsPage)
router.post('/settings', enforceSelfOnly({}), updateSettings)

export { router as profileRoutes }