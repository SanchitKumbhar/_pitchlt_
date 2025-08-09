const express = require('express')
const dotenv = require('dotenv')
const { connect } = require('mongoose')
const connectDB = require('./config/config')
const router = require("./router/router")
const multer = require("multer")
const path=require("path");
dotenv.config()
connectDB();
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const port = 3000



app.use("/api/auth",router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
