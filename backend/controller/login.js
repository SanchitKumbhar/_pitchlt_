const async_handler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const user = require("../models/user");

const login = async_handler(async (req, res) => {
    const { username, password } = req.body;

    const existance = await user.findOne({ username });

    if (existance && (await bcrypt.compare(password, existance.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: existance.username,
                    id: existance.id
                }
            },
            process.env.JWT_SECRET,
            { expiresIn: "120m" }
        );

        res.cookie("accessToken", accessToken , {httpOnly:true,maxAge:12000000}); // 🛠️ optional: set cookie name
        res.status(200).json({ message: "Login successful", accessToken });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
});

module.exports = login;
