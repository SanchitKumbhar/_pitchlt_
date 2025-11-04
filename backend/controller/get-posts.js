const express=require("express");
const async_handler=require("express-async-handler");
const posts=require("../models/post");

const get_all_posts=async_handler(async(req,res)=>{
    allPosts=posts.findById(pitchid="689834f188b97f0e994c0187");
    console.log(allPosts);
    // console.log(req.user.user.id);
    res.send("Done");
})

module.exports=get_all_posts