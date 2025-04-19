import { prisma } from '../services/prisma.js'

export const getAllCategories = async () => {
    const data = await prisma.category.findMany({
        select: {
            id: true,
            title: true
        }
    })
    return data
}

export const getCategoryById = async (id) => {
    const data = await prisma.category.findFirst({
        where: {
            id: +id
        },
        select: {
            id: true,
            title: true,
            products: {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    price: true,
                    image: true,

                }
            }
        }
    })
    return data
}

export const getAllCategoriesWithProducts = async () => {
    const data = await prisma.category.findMany({
        select: {
            id: true,
            title: true,
            products: {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    price: true,
                    image: true,

                }
            }
        }
    })
    return data
}