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
    res.locals.currentUser = user || null;
    next();
}