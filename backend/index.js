
// ---------------- START SERVER ----------------

const express = require("express");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/config");
const userModel = require("./models/user");
const routers=require("./router/router")
const cookieParser = require("cookie-parser");

dotenv.config();
connectDB();

const app = express();

// Allow requests from your React frontend with credentials (cookies)
app.use(cors({
  origin: ["http://localhost:5173","https://0649218s-5173.inc1.devtunnels.ms","http://127.0.0.1:5173"],  // frontend
  credentials: true   // allow cookies/tokens
}));
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  console.log("Incoming cookies:", req.headers.cookie);
  console.log("Parsed cookies:", req.cookies);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/api",routers);
app.use("/api/auth",routers);

const isProduction = process.env.NODE_ENV === "production";



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
