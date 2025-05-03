import { prisma } from '../../services/prisma.js'

export const getAll = async () => {
    const data = await prisma.product.findMany({
        include: {
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
    })
    return data
}

export const create = async ({ title, price, description, image, categoryId }) => {
    const response = await prisma.product.create({
        data: {
            title,
            price: +price,
            description,
            image,
            categoryId: +categoryId
        }
    })
    if (response) {

        return true
    }
    return false
}

export const update = async ({ id, title, price, description, image, categoryId }) => {
    const response = await prisma.product.update({
        where: {
            id: +id
        },
        data: {
            title,
            price: +price,
            description,
            image,
            categoryId: +categoryId
        }
    })
    if (response) {

        return true
    }
    return false
}

export const remove = async (id) => {
    const response = await prisma.product.delete({
        where: {
            id: +id
        }
    })
    if (response) {

        return true
    }
    return false
}