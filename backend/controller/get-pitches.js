const express=require("express");
const async_handler=require("express-async-handler");
const pitch = require("../models/pitch");

const get_all_pitches=async_handler(async(req,res)=>{
    allPitch=pitch.findById(createdBy="688f109522e9be696fce6852");
    console.log(allPitch);
    // console.log(req.user.user.id);
    res.send("Done");
})

module.exports=get_all_pitches