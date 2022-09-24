const express = require('express')
const app = express()
const path = require('path')

// ENVIRONMENT
require('dotenv').config()

// connect
require('./helper/db')

// needful things
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

// routers
app.use(require('./routes/user.routes.ts'))

const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log('Server listened on port: ' + port);
})