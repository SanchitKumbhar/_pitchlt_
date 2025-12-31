// const express = require('express');
// const dotenv = require('dotenv');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');
// const path = require('path');
// const connectDB = require('./config/config');
// const userModel = require('./models/user');

// dotenv.config();
// connectDB();

// const app = express();

// // Allow requests from your React frontend with credentials (cookies)
// app.use(cors({
//   origin: 'http://192.168.56.1:5173',  // frontend origin
//   credentials: true,
// }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/media", express.static(path.join(__dirname, "media")));

// const isProduction = process.env.NODE_ENV === "production";

// // Register route
// app.post('/register', (req, res) => {
//   let { username, email, password } = req.body;

//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) return res.status(500).json({ error: 'Server error during salt generation' });

//     bcrypt.hash(password, salt, async (err, hash) => {
//       if (err) return res.status(500).json({ error: 'Server error during hashing' });

//       try {
//         let createdUser = await userModel.create({
//           username,
//           email,
//           password: hash
//         });

//         let token = jwt.sign({ email }, "Server@2321123");

//         res.cookie("token", token, {
//           httpOnly: true,
//           sameSite: "None",
//           secure: isProduction, // secure true only in production with HTTPS
//         });

//         // res.status(201).json({ message: "User registered successfully", user: createdUser });
// res.send(`
//   <script>
//     alert('User registered successfully');
//     window.location.href = "http://192.168.56.1:5173/login";
//   </script>
// `);

// console.log(createdUser)
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Error creating user' });
//       }
//     });
//   });
// });

// // Login route
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     let user = await userModel.findOne({ email });
//     if (!user) return res.status(400).json({ error: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: "Invalid password" });

//     let token = jwt.sign({ email: user.email }, "Server@2321123");

//     res.cookie("token", token, {
//       httpOnly: true,
//       sameSite: "None",
//       secure: isProduction,
//     });

//     // res.status(200).json({ message: "Login successful", user });
//     res.send(`
//   <script>
//     alert('Login successful');
//     window.location.href = "http://192.168.56.1:5173/dashboard";
//   </script>
// `);

// console.log(user)

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Logout route clears cookie properly
// app.get('/logout', (req, res) => {
//   res.cookie("token", "", {
//     httpOnly: true,
//     sameSite: "None",
//     secure: isProduction,
//     expires: new Date(0)
//   });
//   res.redirect("http://192.168.56.1:5173"); // Adjust if needed
// });

// // Start server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const path = require("path");
// const connectDB = require("./config/config");
// const userModel = require("./models/user");
// const routers=require("./router/router")

// dotenv.config();
// connectDB();

// const app = express();

// // Allow requests from your React frontend with credentials (cookies)
// app.use(
//   cors()
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/media", express.static(path.join(__dirname, "media")));
// app.use("/api",routers);
// app.use("/api/auth",routers);

// const isProduction = process.env.NODE_ENV === "production";

// // ---------------- REGISTER ----------------
// app.post("/register", (req, res) => {
//   let { username, email, password } = req.body;

//   // Simple validation
//   if (!username || !email || !password) {
//     return res.status(400).json({ error: "Please provide all fields" });
//   }

//   bcrypt.genSalt(10, (err, salt) => {
//     if (err)
//       return res
//         .status(500)
//         .json({ error: "Server error during salt generation" });

//     bcrypt.hash(password, salt, async (err, hash) => {
//       if (err)
//         return res.status(500).json({ error: "Server error during hashing" });

//       try {
//         let createdUser = await userModel.create({
//           username,
//           email,
//           password: hash,
//         });

//         let token = jwt.sign({ email }, process.env.JWT_SECRET);

//         res.cookie("token", token, {
//           httpOnly: true,
//           sameSite: "None",
//           secure: isProduction,
//         });

//         res.send(`
//           <script>
//             alert('User registered successfully');
//             window.location.href = "http://192.168.56.1:5173/login";
//           </script>
//         `);
//         console.log("User created:", createdUser);
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Error creating user" });
//       }
//     });
//   });
// });

// // ---------------- LOGIN ----------------
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: "Please provide email and password" });
//   }

//   try {
//     let user = await userModel.findOne({ email });
//     if (!user) return res.status(400).json({ error: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: "Invalid password" });

//     let token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

//     res.cookie("token", token, {
//       httpOnly: true,
//       sameSite: "None",
//       secure: isProduction,
//     });

//     res.send(`
//       <script>
//         alert('Login successful');
//         window.location.href = "http://192.168.56.1:5173/dashboard";
//       </script>
//     `);
//     console.log("User logged in:", user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// ---------------- LOGOUT ----------------
// app.get("/logout", (req, res) => {
//   res.cookie("token", "", {
//     httpOnly: true,
//     sameSite: "None",
//     secure: isProduction,
//     expires: new Date(0),
//   });
//   res.redirect("http://192.168.56.1:5173");
// });

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
  // origin: ["http://localhost:5173","https://0649218s-5173.inc1.devtunnels.ms","http://127.0.0.1:5173"],  // your frontend
  credentials: true   // allow cookies/tokens
}));
app.use(express.json());
app.use(cookieParser());

// app.use((req, res, next) => {
//   console.log("Incoming cookies:", req.headers.cookie);
//   console.log("Parsed cookies:", req.cookies);
//   next();
// });

app.use(express.urlencoded({ extended: true }));
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/api",routers);
app.use("/api/auth",routers);

const isProduction = process.env.NODE_ENV === "production";



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
