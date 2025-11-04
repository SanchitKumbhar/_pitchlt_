const express = require("express");
const async_handler = require('express-async-handler');
const bcrypt = require("bcryptjs");
const user = require("../models/user")
const jwt=require("jsonwebtoken");

const signup = async_handler(async (req, res) => {
    const {username,email,password,userType}=req.body;

    const existance = await user.findOne({ email });
    if (existance) {
        res.status(400);
        throw  new Error("Email already exist");
    }
    console.log(password);
    const hash=await bcrypt.hash(password,10);
    const newuser = new user({username,email,password:hash,userType});
    newuser.save();
    console.log(newuser);
    
    res.send({
        "message" : "User registered successfully!!!"
    });

});



module.exports=signup;