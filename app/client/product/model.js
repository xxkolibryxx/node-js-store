import { prisma } from '../../services/prisma.js'

export const getAll = async () => {
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

export const getById = async (id) => {
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
export const getByCategory = async (id) => {
    const products = await getAll();
    return products.filter((product) => product.category_id === id)
}