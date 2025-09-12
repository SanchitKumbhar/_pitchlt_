const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

module.exports = function (req, res, next) {
  // read from cookie or header
  const token =
    req.cookies?.auth || req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "token not provided" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};
