import { getAllCategories, getCategoryById } from "../model/category-model.js";
import { getProductsByCategory } from "../model/product-model.js";
import * as categoryModel from '../model/category-model.js'

export const categorySingle = async (req, res) => {
    const category = await categoryModel.getCategoryById(req.params.id);
    if (category) {

        const categories = await categoryModel.getAllCategories();
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