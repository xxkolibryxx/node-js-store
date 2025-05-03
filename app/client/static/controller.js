import * as staticModel from './model.js'
import * as categoryModel from '../category/model.js'

export const homePage = async (req, res) => {
    const categories = await categoryModel.getAllWithProductsLimit()
    const slider = await staticModel.getSlider();

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