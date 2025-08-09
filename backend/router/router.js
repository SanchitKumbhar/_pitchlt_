const express = require("express");
const signup=require("../controller/signup");
const login=require("../controller/login")
const pitch=require("../controller/pitch");
const token__middleware=require("../middleware/jwttoken");
const uploads=require("../middleware/fileuploads");
router=express.Router()

router.post("/signup",signup);
router.post("/login",login)
router.post("/create-pitch",token__middleware,uploads.fields([{name:"image",maxCount:1},{name:pitchDeck,maxCount:1}]),pitch);


module.exports=router;