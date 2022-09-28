const jwt  = require("jsonwebtoken")
const secret = process.env.KEY

class Token{
    async generateToken(user){
        return await jwt.sign(user,secret)
    }

    async verifyToken(user){
        return await jwt.verify(user,secret, (err)=>{
            if(!err){
                return err
            }
        })
    }
}

module.exports = new Token()