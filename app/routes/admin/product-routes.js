import { Router } from "express";
import { addProductAction, addProductPage, deleteProductAction, updateProductAction, updateProductPage } from "../../controller/admin/product-controller.js";
import { productList } from "../../controller/admin/product-controller.js";

const router = Router();

router.get('/', productList);
router.get('/add-product', addProductPage);
router.get('/update-product/:id', updateProductPage);
router.post('/addProduct', addProductAction);
router.post('/updateProduct', updateProductAction);
router.get('/deleteProduct/:id', deleteProductAction);

export { router as adminProductRoutes }
