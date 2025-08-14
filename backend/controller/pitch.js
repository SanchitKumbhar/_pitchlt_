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
        // createdBy:req.user.id
    })

    await new_pitch.save();
    res.status(201).json({ message: "Pitch created successfully", pitch: new_pitch });

})

module.exports = pitch_reg;