const { Router } = require('express')
const router = Router()
const controll = require("../controller/user")

router.get('/', controll.GetUsers)
router.get("/vocab", controll.vocab)
router.post("/add/vocab", controll.pushVocab)
router.get("/delete/:id", controll.DeleteVocab)

module.exports = router