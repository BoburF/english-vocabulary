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
    console.log(verify);

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
  const object = vocab.vocab.find(obj => obj._id === +id);
  console.log(object);
}

module.exports.GetUsers = async (req, res) => {
  const getAll = await userModel.find()
  return res.json(getAll)
}
