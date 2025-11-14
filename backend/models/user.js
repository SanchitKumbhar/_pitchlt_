const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  //
  email: {
    type: String,
    required: true,
    unique: true,
  },

  userType:{
    type:String,
    enum:["Founder","Community Member","Incubator"],
    required:true,
    default:"Founder"
  },

  //
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userschema, "authuser");
