const userModel = require("../model/User")
const token = require("../services/Token/token")

const verifyUser = async(name)=>{
        const user = await userModel.findOne(name)
        if(!user){
            throw new Error("password or username is incorrect")
        }
        return true
}

module.exports = {
    login: async (req, res) => {
        try {
            const {name, password} = req.body

            await verifyUser(name)

            const user = await token.generateToken({name,password})

            res.json(user)
        } catch (error) {
            throw res.json("password or username is incorrect")
        }
    },
    registr: async (req, res) => {
        try {
            const {name, password} = req.body

            const OldAdmin = await userModel.findOne({ name })

            if (OldAdmin) {
                return res.json('this user already have got')
            }

            const userMod = await userModel.create({name,password})

            const user = await token.generateToken({name,password})
            console.log(user)
            res.send(user)
        } catch (error) {
            throw res.json("user is cannot be authorized")
        }
    }
}