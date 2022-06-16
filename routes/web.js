const homeController = require('../app/http/controllers/homeController')
const loginController = require('../app/http/controllers/Auth/loginController')
const registerController = require('../app/http/controllers/Auth/loginController')
const intiRoutes = (app) => {
    app.get('/', homeController().index)
    app.post('/updateCart',homeController().updateCart)
    app.get('/cart', (req, res) => {
        res.render('customer/cart')
    })

    app.get('/login', (req, res) => {
        res.render('auth/login')
    })

    app.get('/register', (req, res) => {
        res.render('auth/register')
    })
}
module.exports = intiRoutes;