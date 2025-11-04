const express = require("express");
const signup=require("../controller/signup");
const login=require("../controller/login")
const pitch=require("../controller/pitch");
const token__middleware=require("../middleware/jwttoken");
const uploads=require("../middleware/fileuploads");
const new_team_user = require("../controller/team");
const post=require("../controller/posts");
const reviews = require("../models/reviews");
const get_pitches = require("../controller/get-pitches");
const get_posts = require("../controller/get-posts");
router=express.Router()




router.post("/signup",signup);
router.post("/login",login)
router.post("/create-pitch",token__middleware,uploads.fields([{name:"image",maxCount:1},{name:"pitchDeck",maxCount:1}]),pitch);
router.post("/create-new-team-user",token__middleware,new_team_user);
router.post("/create-new-post",uploads.fields([{name:"video",maxCount:1},{name:"photo",maxCount:1}]),post);
router.post("/create-review",reviews);
router.post("/create-review",reviews);
router.get("/get-all-pitches",get_pitches);
router.get("/get-all-posts",get_posts);


module.exports=router;