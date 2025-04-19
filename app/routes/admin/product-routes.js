import { Router } from "express";
import { addProductAction, addProductPage } from "../../controller/admin/product-controller.js";
import { productList } from "../../controller/admin/product-controller.js";

const router = Router();

router.get('/', productList);
router.get('/add-product', addProductPage);
router.post('/addProduct', addProductAction);

export { router as adminProductRoutes }
