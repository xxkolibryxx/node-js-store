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

export const addProduct = async (product) => {
    const products = await getAllProducts();
    product.id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push(product)
    await fs.promises.writeFile(filePath, JSON.stringify(products, null, 2))
    return product
}