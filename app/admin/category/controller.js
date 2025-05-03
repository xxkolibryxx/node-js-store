import * as categoryModel from './model.js'

export const list = async (req, res) => {
    const categories = await categoryModel.getAll();
    const { success } = req.session
    req.session.success = null
    res.render('admin/category/category-list.hbs', {
        layout: 'admin',
        active: 'category-list',
        dataTable: true,
        categories,
        success
    })
}

export const createPage = async (req, res) => {
    res.render('admin/category/add-category.hbs', {
        layout: 'admin',
    })
}

export const create = async (req, res) => {
    const response = await categoryModel.create(req.body)
    req.session.success = response ? { status: true, message: 'Category add successful' } : { status: false, message: 'Something went wrong' }
    res.redirect('/admin/category')
}

export const updatePage = async (req, res) => {
    const id = req.params.id
    const category = await categoryModel.getById(id)
    res.render('admin/category/update-category.hbs', {
        layout: 'admin',
        category
    })
}

export const update = async (req, res) => {
    const response = await categoryModel.update(req.body)
    req.session.success = response ? { status: true, message: 'Category updated' } : { status: false, message: 'Something went wrong' }
    res.redirect('/admin/category')
}

export const remove = async (req, res) => {
    const id = req.params.id
    const response = await categoryModel.remove(id)
    req.session.success = response ? { status: true, message: 'Category deleted' } : { status: false, message: 'Something went wrong' }
    res.redirect('/admin/category')
}