import * as cartModel from './model.js'

export const getById = async (req, res) => {
    try {
        const user = res.locals.currentUser
        console.log(res.locals.userCartCount);

        const cartId = user?.cart?.id
        const data = await cartModel.getById(cartId)
        res.send(data)
    } catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id
        const response = await cartModel.remove(id)
        res.send(response)
    } catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
}