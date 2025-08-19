const mongoose=require("mongoose");

const events = mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"User",
    },
    pitch_user:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"User",
    },
    pitch:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"Pitch",
    },
    event_type:{
        type:String,
        enum:["online","offline","hybrid"],
        default:"online"
    },
    title:{
        type:String,
        required:true,
    },
    media:{
        image : {
            type:String
        },
        video:{
            type:String
        }
    },
    description:{
        type:Text,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    is_active:{
        type:Boolean,
        default:true
    }
});

module.exports=mongoose.model("Events",events);