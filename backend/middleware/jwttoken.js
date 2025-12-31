const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

module.exports = function (req, res, next) {
  // Prefer Authorization header if present, otherwise fall back to cookie
  const authHeader = req.header("Authorization");
  const tokenFromHeader = authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;
  const tokenFromCookie = req.cookies?.auth;

  // If header is provided but not in Bearer format, reject
  if (authHeader && !tokenFromHeader) {
    return res.status(400).json({ message: "Invalid Authorization header format. Use 'Bearer <token>'." });
  }

  const token = tokenFromHeader || tokenFromCookie;

  // If no token at all, deny access
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  // If both cookie and header are present but different, prefer header and log a warning
  if (tokenFromHeader && tokenFromCookie && tokenFromHeader !== tokenFromCookie) {
    console.warn("Warning: Authorization header token differs from cookie token. Using header token.");
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};