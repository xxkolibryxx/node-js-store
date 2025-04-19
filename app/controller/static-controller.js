import { getAllCategories, getCategoryById } from "../model/category-model.js"
import { getAllProducts, getProductsByCategory } from "../model/product-model.js"
import { getSlider } from "../model/static-model.js"
import * as categoryModel from '../model/category-model.js'

export const homePage = async (req, res) => {
    const categories = await categoryModel.getAllCategoriesWithProducts()
    const slider = await getSlider();

    res.render('home', {
        headline: 'Online Shop',
        slider,
        categories,
        uploadsPath: process.env.UPLOADS_PATH_URL,
    })
}

export const contactPage = (req, res) => {
    res.render('contact', {
        headline: 'Contact Page',
    })
}