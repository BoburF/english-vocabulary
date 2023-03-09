const userModel = require("../model/User");
const token = require("../services/Token/token");


module.exports = {
  vocab: async (req, res) => {
    const verify = await token.verifyToken(req.headers.authorization)
    const vocab = await userModel.findOne({ name: verify.name })
    return res.json(vocab);
  }
};

module.exports.pushVocab = async (req, res) => {
  try {
    const { word, translate, description } = req.body
    const verify = await token.verifyToken(req.headers.authorization)
    if (verify.name !== "JsonWebTokenError") {
      await userModel.findOneAndUpdate({ name: verify.name }, {
        $push: {
          vocab: { word, translate, description }
        }
      })
      return res.send("Word added!")
    } else {
      return res.status(400).json("Token not found")
    }
  } catch (error) {
    return res.status(400).send("Word not added!")
  }
}

module.exports.DeleteVocab = async (req, res) => {
  const { id } = req.params
  const verify = await token.verifyToken(req.headers.authorization)
  const vocab = await userModel.findOne({ name: verify.name })
  if (vocab) {
    const deleteVoc = vocab.vocab.filter((voc) => {
      return voc._id != id;
    });
    if (deleteVoc) {
      vocab.vocab = deleteVoc
      await vocab.save()
      return res.status(201).send({ message: `Word deleted`, success: true })
    } else {
      return res.status(404).send({ message: "ID not found!", success: false })
    }
  } else {
    return res.status(400).send({ message: "Token not found", success: false })
  }
}

module.exports.GetUsers = async (req, res) => {
  const getAll = await userModel.find()
  return res.json(getAll)
}
