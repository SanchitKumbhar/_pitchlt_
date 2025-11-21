const express = require("express")
const async_handler=require("express-async-handler")
const hiring = require("../models/hiring")
const create_hiring=async_handler(async (req,res) => {
   const {
        fullname,email,phonnumber,date,gender,address,jobrole,jobtype,preferred_Location,salary,highest_qualification,experience,skills,past_companies,linkedin,github,dateofjoining,self_intro,checkbox1,checkbox2
   } =req.body

   const new_hiring=new hiring({
    Personal_Details:{
        fullname,email,phonnumber,date,gender,address
    },
    Position_Details:{
        jobrole
        ,jobtype,
        preferred_Location,salary
    },
    Skill_Experience:{
        highest_qualification,experience,skills,past_companies,
        resume:req.file?.resume?`media/${Date.now()+req.files.resume[0].filename}`:null
    },
    Additional_Details:{
        linkedin,github,dateofjoining,self_intro
    },
    Agreement:{
        checkbox1,checkbox2
    }
   });

   await new_hiring.save();

   res.status(401).json({
    "message" : "New Event Created"
   });


});

module.exports={create_hiring}