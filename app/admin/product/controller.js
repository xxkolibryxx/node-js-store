import * as productModel from './model.js'
import * as categoryModel from '../category/model.js'

export const list = async (req, res) => {
    const products = await productModel.getAll();
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

export const createPage = async (req, res) => {
    const categories = await categoryModel.getAll()
    res.render('admin/product/add-product.hbs', {
        layout: 'admin',
        categories,
    })
}

export const create = async (req, res) => {
    const response = await productModel.create(req.body)
    req.session.success = response ? { status: true, message: 'Product add successful' } : { status: false, message: 'Something went wrong' }
    res.redirect('/admin/products')
}

export const updatePage = async (req, res) => {
    const productId = req.params.id
    const categories = await categoryModel.getAll()
    const product = await productModel.getById(productId)
    res.render('admin/product/update-product.hbs', {
        layout: 'admin',
        categories,
        product
    })
}

export const update = async (req, res) => {
    const response = await productModel.update(req.body)
    req.session.success = response ? { status: true, message: 'Product Updated' } : { status: false, message: 'Something went wrong' }
    res.redirect('/admin/products')
}
export const remove = async (req, res) => {
    const response = await productModel.remove(req.params.id)
    req.session.success = response ? { status: true, message: 'Product Deleted' } : { status: false, message: 'Something went wrong' }
    res.redirect('/admin/products')
}