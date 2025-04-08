import { getAllCategories, getCategoryById } from "../model/category-model.js"
import { getAllProducts, getProductsByCategory } from "../model/product-model.js"
import { getSlider } from "../model/static-model.js"

export const homePage = async (req, res) => {
    const smartphones = await getProductsByCategory(1)
    const notebooks = await getProductsByCategory(2)
    const slider = await getSlider();
    const smartphonesCategory = await getCategoryById(1)
    const notebooksCategory = await getCategoryById(2)

    res.render('home', {
        headline: 'Online Shop',
        products: {
            smartphones,
            notebooks
        },
        slider,
        categories: {
            smartphonesCategory,
            notebooksCategory
        },
        uploadsPath: process.env.UPLOADS_PATH_URL,
    })
}

export const contactPage = (req, res) => {
    res.render('contact', {
        headline: 'Contact Page',
    })
}