const mongoose = require('mongoose')

mongoose.connect(process.env.URI, (err) => {
    global.info('MongoDb running')
})