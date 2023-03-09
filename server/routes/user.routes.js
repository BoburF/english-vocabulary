const { Router } = require('express')
const router = Router()
const { GetUsers, vocab, pushVocab, DeleteVocab, UpdateVocab } = require("../controller/user")

router.get('/', GetUsers)
router.get("/vocab", vocab)
router.post("/add/vocab", pushVocab)
router.delete("/delete/:id", DeleteVocab)
router.put("/update/:id", UpdateVocab)

module.exports = router