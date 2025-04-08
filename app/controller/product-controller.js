import * as categoryModel from "../model/category-model.js";
import * as productModel from "../model/product-model.js";

export const productSingle = async (req, res) => {
    const product = await productModel.getProductById(+req.params.id);
    res.render('product/single-product.hbs', {
        product,
    })
}
export const addProductPage = async (req, res) => {
    const categories = await categoryModel.getAllCategories()
    res.render('product/add-product.hbs', {
        categories,
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

export const addProduct = (req, res) => {
    const { name, price, description, image, category_id } = req.body
    console.log(req.body);

    if (!name || !price || !description || !image || !category_id) {
        return res.send('404')
    }
    const newProduct = productModel.addProduct({ name, price, description, image, category_id })
    res.send('Product add success')
}