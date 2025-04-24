import * as categoryModel from '../../model/admin/category-model.js'

export const categoryList = async (req, res) => {
    const categories = await categoryModel.getAllCategories();
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

export const addCategoryPage = async (req, res) => {
    res.render('admin/category/add-category.hbs', {
        layout: 'admin',
    })
}

export const addCategoryAction = async (req, res) => {
    const response = await categoryModel.addNewCategory(req.body)
    req.session.success = response ? { status: true, message: 'Category add successful' } : { status: false, message: 'Something went wrong' }
    res.redirect('/admin/category')
}

export const updateCategoryPage = async (req, res) => {
    const id = req.params.id
    const category = await categoryModel.getCategoryById(id)
    res.render('admin/category/update-category.hbs', {
        layout: 'admin',
        category
    })
}

export const updateCategoryAction = async (req, res) => {
    const response = await categoryModel.updateCategory(req.body)
    req.session.success = response ? { status: true, message: 'Category updated' } : { status: false, message: 'Something went wrong' }
    res.redirect('/admin/category')
}

export const deleteCategoryAction = async (req, res) => {
    const id = req.params.id
    const response = await categoryModel.deleteCategory(id)
    req.session.success = response ? { status: true, message: 'Category deleted' } : { status: false, message: 'Something went wrong' }
    res.redirect('/admin/category')
}