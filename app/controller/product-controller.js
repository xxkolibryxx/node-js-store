import * as categoryModel from "../model/category-model.js";
import * as productModel from "../model/product-model.js";

export const productSingle = async (req, res) => {
    const product = await productModel.getProductById(+req.params.id);
    res.render('product/single-product.hbs', {
        product,
    })
}

export const productPage = async (req, res) => {
    const products = await productModel.getAllProducts();
    const categories = await categoryModel.getAllCategories();
    res.render('product/product.hbs', {
        products,
        categories
    })
}