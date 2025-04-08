import { Router } from "express";
import { productSingle, productPage, addProduct, addProductPage } from '../controller/product-controller.js'

const router = Router();

router.get('/', productPage)
router.get('/:id', productSingle)
router.post('/addProduct', addProduct);
router.get('/add-product', addProductPage);

export { router as productRoutes }