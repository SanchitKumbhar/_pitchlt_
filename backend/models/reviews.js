const mongoose=require("mongoose");

const review = new mongoose.Schema({
    postid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        default:"689cb6172409a560a8eed8a2"
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:"688f109522e9be696fce6852"
    },
    likes:{
        type:Number,
        required:false
    },
    comments:{
        type:String,
        required:false
    }
})

module.exports=mongoose.model("review",review);