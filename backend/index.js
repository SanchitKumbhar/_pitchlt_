const express = require('express')
const dotenv = require('dotenv')
const { connect } = require('mongoose')
const connectDB = require('./config/config')
const router = require("./router/router")
dotenv.config()
connectDB();
const app = express()
app.use(express.json())

const port = 3000

app.use("/api/auth",router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
