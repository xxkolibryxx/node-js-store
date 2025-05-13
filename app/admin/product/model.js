import { prisma } from '../../services/prisma.js'
import { ErrorService } from '../../services/error-service.js'
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
    if (!data) {
        throw ErrorService.BadRequestError()
    }
    return data
}

export const getById = async (id) => {
    const data = await prisma.product.findFirst({
        where: {
            id: +id
        },
    })
    if (!data) {
        throw ErrorService.BadRequestError()
    }
    return data
}

export const create = async (req) => {
    const { title, price, description, image, categoryId } = req.body
    const imagePath = req.filePath
    const response = await prisma.product.create({
        data: {
            title,
            price: +price,
            description,
            image: imagePath,
            categoryId: +categoryId
        }
    })
    if (!response) {
        throw ErrorService.BadRequestError()
    }
    return true
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
    if (!response) {

        throw ErrorService.BadRequestError()
    }
    return true
}

export const remove = async (id) => {
    const response = await prisma.product.delete({
        where: {
            id: +id
        }
    })
    if (!response) {
        throw ErrorService.BadRequestError()
    }
    return true
}