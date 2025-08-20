const mongoose=require("mongoose");

const events = mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"User",
        default:"688f109522e9be696fce6852"
    },
    pitch_user:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"User",
        default:"688f109522e9be696fce6852"
    },
    pitch:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"Pitch",
        default:"689834f188b97f0e994c0187"
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
        type:String,
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