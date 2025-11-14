const express = require("express");
const async_handler = require("express-async-handler");
const Pitch = require("../models/pitch");

const get_all_pitches = async_handler(async (req, res) => {
    // Use await and pass the actual ID string

    const allPitch = await Pitch.find({ createdBy: "68b5b12291bbe08b403972c3" });
    
    if (!allPitch) {
        return res.status(404).json({ message: "Pitch not found" });
    }

    console.log(allPitch);

    res.status(200).json({
        data: allPitch
    });
});

module.exports = get_all_pitches;
