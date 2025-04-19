import * as productModel from '../../model/admin/product-model.js'
import * as categoryModel from '../../model/admin/category-model.js'

export const productList = async (req, res) => {
    const products = await productModel.getAllProducts();
    // const categories = await categoryModel.getAllCategories();
    res.render('admin/product/product-list.hbs', {
        layout: 'admin',
        active: 'product-list',
        dataTable: true,
        products,
        // categories
    })
}

export const addProductPage = async (req, res) => {
    const categories = await categoryModel.getAllCategories()
    res.render('admin/product/add-product.hbs', {
        layout: 'admin',
        categories,
    })
}
