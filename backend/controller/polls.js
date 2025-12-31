const polls=require("../models/polls");
const async_handler = require("express-async-handler");

const createpoll=async_handler(async(req,res)=>{
    const {question, options} = req.body;
    
    const poll = new polls({
        question,options
    });
    await poll.save();

    return res.status(201).json({
        "message" : "The poll has been created"
    });
});

const updatepoll=async_handler(async(req,res)=>{
    const poll = await posts.findById(req.params.pollid);
    if (!post) return res.status(404).json({ message: "Event not found" });

    const updates = req.body;
    Object.assign(poll, updates);
    await poll.save();  

    res.status(200).json({ message: "Poll updated", poll });
});

const getallpolls=async_handler(async(req,res)=>{
    const allpolls=await polls.find(req.params.pitchid);
    return res.status(200).json({"message" : allpolls});
});

const getpoll=async_handler(async(req,res)=>{
    const poll=await polls.findById(req.params.pollid);
    return res.status(200).json({
        "message" : poll
    })
});

const  deletepoll=async_handler(async(req,res)=>{
    const deletePoll = await polls.deleteOne(req.params.pollid);

    return res.status(200).json({
        "message" : "poll deleted"
    });

});

module.exports={createpoll,getallpolls,getpoll,deletepoll,updatepoll};
