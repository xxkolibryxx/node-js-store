export const setUser = (req, res, next) => {
    res.locals.currentUser = req.session.user || null;
    next();
}