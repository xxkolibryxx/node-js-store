export const adminMiddleware = (req, res, next) => {
    if (req.session.userId) return next()
    return res.redirect('/admin/login')
}