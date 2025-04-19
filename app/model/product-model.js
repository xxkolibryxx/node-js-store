import { prisma } from '../services/prisma.js'

export const getAllProducts = async () => {
    const data = await prisma.product.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            price: true,
            image: true,
            category: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    })
    return data
}

export const getProductById = async (id) => {
    const data = await prisma.product.findFirst({
        where: {
            id: +id
        },
        select: {
            id: true,
            title: true,
            description: true,
            price: true,
            image: true,
            category: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    })
    return data
}
export const getProductsByCategory = async (id) => {
    const products = await getAllProducts();
    return products.filter((product) => product.category_id === id)
}