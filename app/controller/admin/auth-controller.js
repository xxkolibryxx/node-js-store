import * as authModel from '../../model/admin/auth-model.js'

export const RegisterPage = (req, res) => {
    res.render('admin/auth/register', {
        error: req.session.error,
        layout: 'admin-auth'
    })
    delete req.session.error
}

export const RegisterAction = async (req, res) => {
    console.log('asd');

    try {
        const response = await authModel.register(req.body)
        res.redirect('/admin/auth/login')
    } catch (error) {
        req.session.error = error.message
        res.redirect('/admin/auth/register')
    }
}

export const LoginPage = (req, res) => {
    res.render('admin/auth/login', {
        error: req.session.error,
        layout: 'admin-auth'
    })
    delete req.session.error
}

export const LoginAction = async (req, res) => {
    try {
        const { data } = await authModel.login(req.body)
        req.session.userId = data.id
        req.session.user = data
        res.redirect('/admin')
    } catch (error) {
        req.session.error = error.message
        res.redirect('/admin/auth/login')
    }
}
export const logOut = (req, res) => {
    req.session.destroy(() => res.redirect('/admin/auth/login'))
}