import { Router } from "express";
import { login, loginPage, logout, register, registerPage } from "./controller.js";
import { authMiddleware } from "../../middlewares/auth-middleware.js";
import { validateMiddleware } from "../../middlewares/validate-middleware.js";
import validations from "./validation.js";

const { registerSchema } = validations

const router = Router()
router.get('/register', registerPage)
router.post('/register', validateMiddleware(registerSchema), register)
router.get('/login', loginPage)
router.post('/login', login)
router.get('/logout', authMiddleware, logout)

export { router as authRoutes }