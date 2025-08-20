const async_handler = require("express-async-handler");
const eventsmodel = require("../models/events");
const events = async_handler(async(req,res)=>{
    const {title,description,created_at,is_active}=req.body;

    const newobj=new eventsmodel({
        media:{
            image:req.files?.image?`/media/${Date.now()+req.files.image[0].filename}`:null,
            video:req.files?.video?`media/${Date.now()+req.files.video[0].filename}`:null,
        },
         title,description,created_at,is_active
    });

    await newobj.save();
    res.status(201).json("the event is created!!!");
});

module.exports = events;