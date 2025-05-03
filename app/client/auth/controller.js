import * as authModel from './model.js'

export const registerPage = (req, res) => {
    res.render('auth/register', {
        error: req.session.error,
    })
    delete req.session.error
}

export const register = async (req, res) => {
    try {
        const response = await authModel.register(req.body)
        res.redirect('/login')
    } catch (error) {
        req.session.error = error.message
        res.redirect('/register')
    }
}

export const loginPage = (req, res) => {
    res.render('auth/login', {
        error: req.session.error,
    })
    delete req.session.error
}

export const login = async (req, res) => {
    try {
        const { data } = await authModel.login(req.body)
        req.session.userId = data.id
        req.session.user = data
        res.redirect('/profile')
    } catch (error) {
        req.session.error = error.message
        res.redirect('/login')
    }
}
export const logout = (req, res) => {
    req.session.destroy(() => res.redirect('/login'))
}