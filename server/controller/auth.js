const token = require("../services/Token/token");
const userModel = require("../model/User");
const bcrypt = require('bcrypt')

module.exports = {
    login: async (req, res) => {
        const { name, password } = req.body;
        const OldUser = await userModel.findOne({ name });

        if (OldUser) {
            const OldPassword = await bcrypt.compare(password, OldUser.password)
            if (!OldPassword) {
                return res.json("Username or password is incorrect!");
            }
            const user = await token.generateToken({ name, password });
            return res.json(user);
        }
    },
    register: async (req, res) => {
        const { name, password } = req.body;
        const OldUser = await userModel.findOne({ name });

        if (OldUser) {
            return res.json("this user already have got");
        }
        if (password) {
            const hash = await bcrypt.hash(password, 10)
            await userModel.create({
                name,
                password: hash
            });
            const user = await token.generateToken({ name, password });
            return res.send(user);
        } else {
            return res.json('Password is required')
        }
    },
} 