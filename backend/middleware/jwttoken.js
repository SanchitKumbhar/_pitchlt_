const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

module.exports = function (req, res, next) {
  // read from cookie or header
  const token =
    req.cookies?.auth || req.header("Authorization")?.split(" ")[1];

  console.log(token);
  
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    // ✅ Changed to 401 for better semantics
    res.status(401).json({ message: "Invalid or expired token." });
  }
};