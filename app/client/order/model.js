import { handleDatabaseError } from "../../helpers/handleDatabaseErrors.js";
import { prisma } from '../../services/prisma.js'
export const create = async ({ userId, total, cartItems, phone, address, cartId }) => {
    try {
        const result = await prisma.order.create({
            data: {
                userId,
                total,
                phone,
                address,
                items: {
                    create: cartItems.map(item => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        title: item.title,
                        priceAtTime: item.price,
                    }))
                }
            }
        });
        if (result) {
            await prisma.cartItem.deleteMany({
                where: {
                    cartId: +cartId
                }
            })
            return true
        }
        return false

    } catch (error) {
        handleDatabaseError(error, { userId, total, cartItems, operation: 'Create Order' });
    }
}