const async_handler=require("express-async-handler");
const posts = require("../models/post");

const post=async_handler(async (req,res) =>{
    const {title,description,pitchid} = req.body;
    const newpost = await new posts({
        media:{
            video:req.files?.image?`/media/${Date.now()+req.files.image[0].filename}`:null,
            photo:req.files?.pitchDeck?`media/${Date.now()+req.files.pitchDeck[0].filename}`:null,
        },
        title,description,pitchid
    });

    const newpostobj= await newpost.save();
    console.log(newpostobj);
    
    return res.status(201).json({
        message:"created new post"
    })
});

const updatepost = async_handler(async(req,res)=>{
        const post = await posts.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Event not found" });
    
        // only the owner (user) or pitch_user should be allowed — simple check
        // const requesterId = req.user?.user?.id || req.user?.user?._id;
        // if (String(post.createdBy) !== String(requesterId) && String(post.pitch_user) !== String(requesterId)) {
        //     return res.status(403).json({ message: "Not authorized to update this event" });
        // }
    
        const updates = req.body;
        Object.assign(post, updates);
        await post.save();
    
        res.status(200).json({ message: "Post updated", post });
    
})

module.exports=post