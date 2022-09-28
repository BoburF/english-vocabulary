const {Router} = require('express')
const router = Router()
const controll = require("../controller/user")


router.post("/user/login", controll.login)

router.post("/user/registr", controll.registr)


module.exports = router