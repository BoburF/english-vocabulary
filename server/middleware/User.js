const {verifyToken} = require("../services/Token/token")

module.exports = (req,res,next)=>{
    const verify = verifyToken(req.headers.authorization)
    if(!verify){
        next()
    }else{
        req.json("Token is expired!")
    }
}