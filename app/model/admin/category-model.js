import { prisma } from '../../services/prisma.js'

export const getAllCategories = async () => {
    const data = await prisma.category.findMany()
    return data
}

export const getCategoryById = async (id) => {
    const categories = await prisma.category.findFirst({
        where: {
            id: +id
        }
    })

    return categories
}

export const addNewCategory = async ({ title }) => {
    const response = await prisma.category.create({
        data: {
            title,
        }
    })
    if (response) {
        return true
    }
    return false
}