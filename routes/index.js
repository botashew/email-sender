const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

router.get('/', (req, res) => {
    res.render(
        'index',
        {
            title: 'Email Sender',
            message: 'Email Sender with Node.js'
        }
    )
})

router.post('/send', (req, res) => {
    const { emailFrom, pwd, emailTo, subject, text } = req.body
    console.log(req.body)
    async function main(){
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: false,
            service: 'gmail',
            auth: {
                user: emailFrom,
                pass: pwd
            }
        })
    
        let info = await transporter.sendMail({
            from: emailFrom,
            to: emailTo,
            subject: subject,
            html: `<h1>${text}</h1>`
        })
    }
    
    main().catch(console.error)
    res.send('Email sent')
})

module.exports = router