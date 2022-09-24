const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    vocab: [
        {
            word: {
                type: String,
                required: true
            },
            translate: {
                type: String,
                required: true
            }
        }
    ],
    vocabDes: [
        {
            word: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    ],
    role: {
        type: String,
        required: true,
        default: "user"
    }
})

module.exports = model("users", userSchema)