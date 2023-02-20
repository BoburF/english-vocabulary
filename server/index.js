const express = require('express')
const app = express()

// ENVIRONMENT
require('dotenv').config()

global.error = global.console.error = msg => console.log('\x1b[31m\x1b[1mError:\x1b[22m \x1b[93m' + msg + '\x1b[0m')
global.info = global.console.info = msg => console.log('\x1b[31m\x1b[36mInfo:\x1b[22m \x1b[93m\x1b[0m' + msg)
global.log = console.log
// connect
require('./helper/db')

// needful things
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routers
app.use('/auth', require('./routes/auth.routes.js'))
app.use("/user", require('./routes/user.routes.js'))

const port = process.env.PORT || 8000
app.listen(port, () => {
    global.info('Server listened on port: ' + port);
})