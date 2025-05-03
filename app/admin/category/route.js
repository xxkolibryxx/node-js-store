import { Router } from "express";
import { create, createPage, list, remove, update, updatePage } from "./controller.js";


const router = Router();
router.get('/', list)
router.get('/create', createPage)
router.post('/create', create)
router.get('/update/:id', updatePage)
router.post('/update', update)
router.get('/delete/:id', remove)

export { router as categoryRoutes }