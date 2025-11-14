const async_handler = require("express-async-handler");
const express = require("express");
const pitch = require("../models/pitch");
// create
const pitch_reg = async_handler(async (req, res) => {
    const {
        pitchTitle,
        tagline,
        fullDescription,
        lookingForMembers,
        rolesRequired,
        inviteUsers,
        category,
        privacy,
        tags,
        videoLink
    } = req.body;

    const new_pitch = new pitch({
        pitchTitle,
        tagline,
        fullDescription,
        teamDetails:{
            lookingForMembers: lookingForMembers === "true",
            rolesRequired:rolesRequired?rolesRequired.split(","):[],
            inviteUsers:inviteUsers?inviteUsers.split(","):[]
        },
        media:{
            image:req.files?.image?`/media/${Date.now()+req.files.image[0].filename}`:null,
            pitchDeck:req.files?.pitchDeck?`media/${Date.now()+req.files.pitchDeck[0].filename}`:null,
            videoLink
        },
        categorization:{
            category:category?category.split(","):[],
            privacy,
            tags:tags?tags.split(","):[]
        },
        createdBy:req.user.user.id
    })

    console.log(new_pitch);
    
    
    await new_pitch.save();
    res.status(201).json({ message: "Pitch created successfully", pitch: new_pitch });

})

const updatepitch= async_handler(async(req,res)=>{
    const pitchId = req.params.id;
    const existing = await pitch.findById(pitchId);
    if(!existing) return res.status(404).json({ message: "Pitch not found" });

    const requesterId = req.user?.user?.id || req.user?.user?._id;
    if(String(existing.createdBy) !== String(requesterId)){
        return res.status(403).json({ message: "Not authorized to update this pitch" });
    }

    const {
        pitchTitle,
        tagline,
        fullDescription,
        lookingForMembers,
        rolesRequired,
        inviteUsers,
        category,
        privacy,
        tags,
        videoLink
    } = req.body;

    if(pitchTitle !== undefined) existing.pitchTitle = pitchTitle;
    if(tagline !== undefined) existing.tagline = tagline;
    if(fullDescription !== undefined) existing.fullDescription = fullDescription;
    if(lookingForMembers !== undefined) existing.teamDetails.lookingForMembers = lookingForMembers === "true";
    if(rolesRequired !== undefined) existing.teamDetails.rolesRequired = rolesRequired ? rolesRequired.split(",") : [];
    if(inviteUsers !== undefined) existing.teamDetails.inviteUsers = inviteUsers ? inviteUsers.split(",") : existing.teamDetails.inviteUsers;
    if(category !== undefined) existing.categorization.category = category ? category.split(",") : [];
    if(privacy !== undefined) existing.categorization.privacy = privacy;
    if(tags !== undefined) existing.categorization.tags = tags ? tags.split(",") : [];
    if(videoLink !== undefined) existing.media.videoLink = videoLink;

    // handle optional files
    if(req.files){
        if(req.files.image && req.files.image.length){
            existing.media.image = `/media/${Date.now()+req.files.image[0].filename}`;
        }
        if(req.files.pitchDeck && req.files.pitchDeck.length){
            existing.media.pitchDeck = `/media/${Date.now()+req.files.pitchDeck[0].filename}`;
        }
    }

    await existing.save();
    res.status(200).json({ message: "Pitch updated", pitch: existing });
});

// keep backwards compatible export: function as default with update attached
module.exports = pitch_reg;
module.exports.updatepitch = updatepitch; 