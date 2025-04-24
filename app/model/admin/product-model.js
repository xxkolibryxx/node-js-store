import fs from 'fs';
import path from 'path';
import { prisma } from '../../services/prisma.js'
const filePath = path.resolve('app/db/products.json');

export const getAllProducts = async () => {
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

export const getProductById = async (id) => {
    const data = await prisma.product.findFirst({
        where: {
            id: +id
        },
    })
    return data
}

export const addNewProduct = async ({ title, price, description, image, categoryId }) => {
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

export const updateProduct = async ({ id, title, price, description, image, categoryId }) => {
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

export const deleteProduct = async (id) => {
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