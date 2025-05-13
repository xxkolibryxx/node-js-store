import Joi from "joi";

export default {
    createSchema: {
        body: Joi.object({
            title: Joi.string()
                .regex(/^[a-zA-Zա-ևԱ-Ֆа-яА-Я ]+$/)
                .message("Category title can't contain number or symbol")
                .required(),
            price: Joi.number().required(),
            description: Joi.string().required(),
            categoryId: Joi.number()
        })
    },
    updateSchema: {
        body: Joi.object({
            id: Joi.number().required(),
            title: Joi.string()
                .regex(/^[a-zA-Zա-ևԱ-Ֆа-яА-Я ]+$/)
                .message("Category title can't contain number or symbol")
                .required(),
            price: Joi.number().required(),
            description: Joi.string().required(),
            categoryId: Joi.number()
        })
    },
    deleteSchema: {
        params: Joi.object({
            id: Joi.number().required(),
        })
    }
}