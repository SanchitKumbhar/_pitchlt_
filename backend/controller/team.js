const async_handler=require("express-async-handler");
const teams = require("../models/team");


const create_team=async_handler(async(req,res)=>{
    const {position,user} = req.body;

    const newuser = new teams({position,user});

    const saveuser = await newuser.save();

    return res.status(201).json({
        message:"new user in team created"
    });
});

module.exports=create_team;