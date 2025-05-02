import { Router } from "express";
import { LoginAction, LoginPage, logOut, RegisterAction, RegisterPage } from "../../controller/admin/auth-controller.js";
import { authMiddleware } from "../../middlewares/auth-middleware.js";

const router = Router()
router.get('/register', RegisterPage)
router.post('/register', RegisterAction)
router.get('/login', LoginPage)
router.post('/login', LoginAction)
router.get('/logout', authMiddleware, logOut)

export { router as authRoutes }