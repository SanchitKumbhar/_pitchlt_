const async_handler=require("express-async-handler");
const posts = require("../models/post");

const post=async_handler(async (req,res) =>{
    const {type,review} = req.body;
    const newpost = new posts({
        media:{
            video:req.files?.image?`/media/${Date.now()+req.files.image[0].filename}`:null,
            photo:req.files?.pitchDeck?`media/${Date.now()+req.files.pitchDeck[0].filename}`:null,
        },
        type,review
    });

    const newpostobj=newpost.save();
    return res.status(201).json({
        message:"created new post"
    })
});

module.exports=post