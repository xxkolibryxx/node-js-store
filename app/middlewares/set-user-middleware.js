import { prisma } from "../services/prisma.js";

export const setUser = async (req, res, next) => {
    const userId = req.session?.user?.id
    if (!userId) {
        return next()
    }
    const user = await prisma.user.findFirst({
        where: { id: +userId },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            cart: {
                select: {
                    id: true
                }
            }
        }
    })

    const userCartCount = await prisma.cartItem.count({
        where: {
            cartId: +user.cart?.id
        }
    })

    res.locals.currentUser = user || null;
    res.locals.userCartCount = userCartCount || 0;
    next();
}