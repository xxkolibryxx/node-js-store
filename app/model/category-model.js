import fs from 'fs';
import path from 'path';

const filePath = path.resolve('app/db/category.json');

export const getAllCategories = async () => {
    const data = await fs.promises.readFile(filePath, 'utf8')
    return JSON.parse(data)
}

export const getCategoryById = async (id) => {
    const categories = await getAllCategories();

    return categories.find((category) => category.id === id)
}