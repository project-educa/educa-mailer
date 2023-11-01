const nodemailerRoutes = require('./mailer.route')

module.exports = (app) => {
    nodemailerRoutes(app)
}