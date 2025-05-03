import * as categoryModel from './model.js'

export const getById = async (req, res) => {
    const category = await categoryModel.getById(req.params.id);
    if (category) {
        const categories = await categoryModel.getAll();
        res.render('product/single-category.hbs', {
            category: {
                id: category?.id,
                title: category?.title
            },
            products: category?.products,
            categories
        })
    }
    else {
        res.status(404).render('404.hbs')
    }
}