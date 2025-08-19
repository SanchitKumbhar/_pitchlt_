const async_handeler=require("express-async-handler");
const review=require("../models/reviews");

const review=async_handeler(async (req,res) => {
    const {likes,comments}=req.body;
    const newreview=new review({
        likes,comments
    })
    const obj=newreview.save()
    return res.status(201).json({
        message:"new review created"
    })
});

module.exports=review;
