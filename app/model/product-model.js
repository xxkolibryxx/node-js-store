import fs from 'fs';
import path from 'path';

const filePath = path.resolve('app/db/products.json');

export const getAllProducts = async () => {
    const data = await fs.promises.readFile(filePath, 'utf8')
    return JSON.parse(data)
}

export const getProductById = async (id) => {
    const products = await getAllProducts();

    return products.find((product) => product.id === id)
}
export const getProductsByCategory = async (id) => {
    const products = await getAllProducts();
    return products.filter((product) => product.category_id === id)
}