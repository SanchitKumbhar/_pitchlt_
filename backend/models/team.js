const mongoose = require("mongoose");

const team = new mongoose.Schema({
    position:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        default:"688f109522e9be696fce6852"
    }
});

module.exports=mongoose.model("teams", team);