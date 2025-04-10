// import * as categoryModel from "../model/category-model.js";
import * as productModel from "../../model/admin/product-model.js";

export const productList = async (req, res) => {
    const products = await productModel.getAllProducts();
    // const categories = await categoryModel.getAllCategories();
    res.render('admin/product/product-list.hbs', {
        layout: 'admin',
        dataTable: true,
        products,
        // categories
    })
}

// export const addProductPage = async (req, res) => {
//     const categories = await categoryModel.getAllCategories()
//     res.render('product/add-product.hbs', {
//         categories,
//     })
// }

// export const addProduct = (req, res) => {
//     const { name, price, description, image, category_id } = req.body
//     console.log(req.body);

//     if (!name || !price || !description || !image || !category_id) {
//         return res.send('404')
//     }
//     const newProduct = productModel.addProduct({ name, price, description, image, category_id })
//     res.send('Product add success')
// }