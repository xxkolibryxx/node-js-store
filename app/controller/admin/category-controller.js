import * as categoryModel from '../../model/admin/category-model.js'

export const addNewCategory = async (req, res) => {
    const result = await categoryModel.addNewCategory(req.body)
    res.send(result)
}