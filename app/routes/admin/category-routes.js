import { Router } from "express";
import { addCategoryAction, categoryList, addCategoryPage, updateCategoryPage, updateCategoryAction, deleteCategoryAction } from "../../controller/admin/category-controller.js";

const router = Router();
router.get('/', categoryList)
router.get('/add-new', addCategoryPage)
router.post('/addCategory', addCategoryAction)
router.get('/update-category/:id', updateCategoryPage)
router.post('/updateCategory', updateCategoryAction)
router.get('/deleteCategory/:id', deleteCategoryAction)

export { router as categoryRoutes }