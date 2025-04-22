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
    const categories = await prisma.category.findMany({
        where: {
            id: { in: [1, 2, 3, 4] },
            products: {
                some: {},
            }
        },
        select: {
            id: true,
            title: true
        },
    })
    const categoriesWithProducts = await Promise.all(
        categories.map(async (category) => {
            const products = await prisma.product.findMany({
                where: {
                    categoryId: category.id,
                },
                take: 4,
                orderBy: {
                    createdAt: 'desc',
                },
            });

            return {
                ...category,
                products,
            };
        })
    );
    return categoriesWithProducts
}