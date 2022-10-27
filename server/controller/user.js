const userModel = require("../model/User");
const token = require("../services/Token/token");

const verifyUser = async (name, password) => {
  try {
    const user = await userModel.findOne({ name: name, password: password });
    if (!user) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }

};

module.exports = {
  login: async (req, res) => {
    try {
      const { name, password } = req.body;
      const userVerified = await verifyUser(name, password);
      if (!userVerified) {
        return res.json("Username or password is incorrect!");
      }

      const user = await token.generateToken({ name, password });

      return res.json(user);
    } catch (error) {
      return res.json("password or username is incorrect");
    }
  },
  registr: async (req, res) => {
    try {
      const { name, password } = req.body;

      const OldAdmin = await userModel.findOne({ name });

      if (OldAdmin) {
        return res.json("this user already have got");
      }

      await userModel.create({ name, password });

      const user = await token.generateToken({ name, password });

      res.send(user);
    } catch (error) {
      return res.json("user is cannot be authorized");
    }
  },
  vocab: async (req, res) => {
    const verify = await token.verifyToken(req.headers.authorization)
    const vocab = await userModel.findOne({ name: verify.name, password: verify.password })
    res.json(vocab.vocab)
  },
  vocabDes: async (req, res) => {
    const verify = await token.verifyToken(req.headers.authorization)
    const vocab = await userModel.findOne({ name: verify.name, password: verify.password })
    res.json(vocab.vocabDes)
  }
};

module.exports.pushVocab = async (req, res) => {
  try {
    const { word, translate } = req.body
    const verify = await token.verifyToken(req.headers.authorization)
    await userModel.findOneAndUpdate({ name: verify.name }, {
      $push: {
        vocab: { word, translate }
      }
    })
    res.send("Word added!")
  } catch (error) {
    res.send("Word not added!")
  }
}

module.exports.pushVocabDes = async (req, res) => {
  try {
    const { word, description } = req.body
    const verify = await token.verifyToken(req.headers.authorization)
    await userModel.findOneAndUpdate({ name: verify.name }, {
      $push: {
        vocabDes: { word, description }
      }
    })
    res.send("Word added!")
  } catch (error) {
    res.send("Word not added!")
  }
}