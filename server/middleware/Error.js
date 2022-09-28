const userModel = require("../model/User")
const token = require("../services/Token/token")

module.exports = async (req, res, next) => {
    const verify = await token.verifyToken(req.header.token || "")
    if(!verify){
        return res.json("User is not authorized")
    }
    next()
}