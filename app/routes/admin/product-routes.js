import { Router } from "express";
import { addProductPage } from "../../controller/admin/product-controller.js";
import { productList } from "../../controller/admin/product-controller.js";

const router = Router();

router.get('/', productList);
router.get('/add-product', addProductPage);

export { router as adminProductRoutes }