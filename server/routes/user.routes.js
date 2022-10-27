const {Router} = require('express')
const router = Router()
const controll = require("../controller/user")

router.get("/vocab", controll.vocab)

router.get("/vocab-des", controll.vocabDes)

router.post("/login", controll.login)

router.post("/registr", controll.registr)

router.post("/add/vocab", controll.pushVocab)

router.post("/add/vocabDes", controll.pushVocabDes)

module.exports = router