import { getAllCategories, getCategoryById } from "../../model/category-model.js";
import { getProductsByCategory } from "../../model/product-model.js";

export const categorySingle = async (req, res) => {
    const category = await getCategoryById(+req.params.id);
    const products = await getProductsByCategory(category.id);
    const categories = await getAllCategories();
    res.render('product/single-category.hbs', {
        category,
        products,
        categories
    })
}