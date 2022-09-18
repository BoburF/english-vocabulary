const express = require('express')
const app = express()

// ENVIRONMENT
require('dotenv').config()





const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log('Server listened on port: ' + port);
})