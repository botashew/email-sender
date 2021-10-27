const express = require('express')
const app = express()
const Routes = require('./routes')
const bodyParser = require('body-parser')

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', Routes)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is running on port ${port}`))