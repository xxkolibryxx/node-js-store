export const dashboardPage = (req, res) => {
    res.render('admin/dashboard.hbs', {
        layout: 'admin',
        chart: true,
    })
}