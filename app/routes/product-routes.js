import { Router } from "express";
import { productSingle, productPage, addProduct, addProductPage } from '../controller/product-controller.js'

const router = Router();

router.get('/', productPage)
router.get('/add-product', addProductPage);
router.post('/addProduct', addProduct);
router.get('/:id', productSingle)

export { router as productRoutes }