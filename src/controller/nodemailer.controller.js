const email = require('../nodemailer')

exports.email = async (req, res) => {
    const data = req.body

    const result = await email.email(data)

    res.status(201).send({result})
}
