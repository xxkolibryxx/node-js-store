import * as productModel from '../../model/admin/product-model.js'
import * as categoryModel from '../../model/admin/category-model.js'

export const productList = async (req, res) => {
    const products = await productModel.getAllProducts();
    const { success } = req.session
    req.session.success = null
    res.render('admin/product/product-list.hbs', {
        layout: 'admin',
        active: 'product-list',
        dataTable: true,
        products,
        success
    })
}

export const addProductPage = async (req, res) => {
    const categories = await categoryModel.getAllCategories()
    res.render('admin/product/add-product.hbs', {
        layout: 'admin',
        categories,
    })
}

export const addProductAction = async (req, res) => {
    const response = await productModel.addNewProduct(req.body)
    req.session.success = response ? { status: true, message: 'Product add successful' } : { status: false, message: 'Something went wrong' }
    res.redirect('/admin/products')
}

export const updateProductPage = async (req, res) => {
    const productId = req.params.id
    const categories = await categoryModel.getAllCategories()
    const product = await productModel.getProductById(productId)
    res.render('admin/product/update-product.hbs', {
        layout: 'admin',
        categories,
        product
    })
}

export const updateProductAction = async (req, res) => {
    const response = await productModel.updateProduct(req.body)
    req.session.success = response ? { status: true, message: 'Product Updated' } : { status: false, message: 'Something went wrong' }
    res.redirect('/admin/products')
}
export const deleteProductAction = async (req, res) => {
    const response = await productModel.deleteProduct(req.params.id)
    req.session.success = response ? { status: true, message: 'Product Deleted' } : { status: false, message: 'Something went wrong' }
    res.redirect('/admin/products')
}