const mongoose = require('mongoose')

mongoose.connect(process.env.URI, (err) => {
    console.log("Connect to database", err);
})