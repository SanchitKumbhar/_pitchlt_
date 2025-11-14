const mongoose=require("mongoose");

const post = new mongoose.Schema({
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        default:"688f109522e9be696fce6852"
    },
    pitchid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Pitch",
        required:true,
        default:"689834f188b97f0e994c0187"
    },
    media:{
    video:{
        type:String,
    },
    photo:{
        type:String
    }
    },
    title:{
      type:String 
    },
    description:{
        type:String
    }

});

module.exports=mongoose.model("post",post);