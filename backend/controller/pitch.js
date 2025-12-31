const async_handler = require("express-async-handler");
const pitch = require("../models/pitch");

/**
 * Helper: Converts comma-separated strings to trimmed arrays
 * Prevents issues like " Backend" (with leading space)
 */
const parseArray = (input) => {
    if (!input) return [];
    if (Array.isArray(input)) return input; // Handle cases where it's already an array
    return input.split(",").map(item => item.trim()).filter(item => item !== "");
};

// @desc    Create a new pitch
// @route   POST /api/pitches
const pitch_reg = async_handler(async (req, res) => {
    if (!req.user) return res.status(401).json({ message: "Authentication required" });

    const {
        pitchTitle, tagline, fullDescription, lookingForMembers,
        rolesRequired, inviteUsers, category, privacy, tags, videoLink
    } = req.body;

    const new_pitch = new pitch({
        pitchTitle,
        tagline,
        fullDescription,
        teamDetails: {
            lookingForMembers: lookingForMembers === "true" || lookingForMembers === true,
            rolesRequired: parseArray(rolesRequired),
        },
        media: {
            image: req.files?.image ? `/media/${Date.now()}_${req.files.image[0].originalname}` : null,
            pitchDeck: req.files?.pitchDeck ? `/media/${Date.now()}_${req.files.pitchDeck[0].originalname}` : null,
            videoLink
        },
        categorization: {
            category: parseArray(category),
            privacy: privacy || "Public",
            tags: parseArray(tags)
        },
        createdBy: req.user.user.id || req.user.user._id
    });

    await new_pitch.save();
    res.status(201).json({ message: "Pitch created successfully", pitch: new_pitch });
});

// @desc    Update existing pitch
// @route   PUT /api/pitches/:id
const updatepitch = async_handler(async (req, res) => {
    if (!req.user) return res.status(401).json({ message: "Authentication required" });

    const existing = await pitch.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: "Pitch not found" });

    const requesterId = req.user?.user?.id || req.user?.user?._id;
    if (String(existing.createdBy) !== String(requesterId)) {
        return res.status(403).json({ message: "Not authorized to update this pitch" });
    }

    const b = req.body;

    // 1. Direct Updates
    if (b.pitchTitle !== undefined) existing.pitchTitle = b.pitchTitle;
    if (b.tagline !== undefined) existing.tagline = b.tagline;
    if (b.fullDescription !== undefined) existing.fullDescription = b.fullDescription;
    
// 2. Nested Team Details (Roles Improvement)
    if (b.lookingForMembers !== undefined) {
        const isLooking = b.lookingForMembers === "true" || b.lookingForMembers === true;
        existing.teamDetails.lookingForMembers = isLooking;

        // NEW LOGIC: If lookingForMembers is false, clear the roles list
        if (!isLooking) {
            existing.teamDetails.rolesRequired = []; 
        }
    }
    
    // Only update roles if lookingForMembers is true or not being changed to false
    if (b.rolesRequired !== undefined && existing.teamDetails.lookingForMembers === true) {
        existing.teamDetails.rolesRequired = parseArray(b.rolesRequired);
    }
    
    // 3. Categorization
    if (b.category !== undefined) existing.categorization.category = parseArray(b.category);
    if (b.privacy !== undefined) existing.categorization.privacy = b.privacy;
    if (b.tags !== undefined) existing.categorization.tags = parseArray(b.tags);

    // 4. Media & Files
    if (b.videoLink !== undefined) existing.media.videoLink = b.videoLink;

    if (req.files) {
        if (req.files.image?.length) 
            existing.media.image = `/media/${Date.now()}_${req.files.image[0].originalname}`;
        if (req.files.pitchDeck?.length) 
            existing.media.pitchDeck = `/media/${Date.now()}_${req.files.pitchDeck[0].originalname}`;
    }

    await existing.save();
    res.status(200).json({ message: "Pitch updated", pitch: existing });
});

// @desc    Get all pitches for the logged-in user
// @route   GET /api/pitches
const get_all_pitches = async_handler(async (req, res) => {
    const userId = req.user?.user?.id || req.user?.user?._id;
    
    // Safety check: If for some reason middleware let a request through without an ID
    if (!userId) {
        return res.status(401).json({ message: "User context missing" });
    }

    const allPitch = await pitch.find({ createdBy: userId }).sort({ createdAt: -1 });
    res.status(200).json({ count: allPitch.length, data: allPitch });
});

// @desc    Get single pitch by ID
// @route   GET /api/pitches/:id
const get_only_pitch = async_handler(async (req, res) => {
    const onlyPitch = await pitch.findById(req.params.id);
    if (!onlyPitch) return res.status(404).json({ message: "Pitch not found" });

    const isPublic = onlyPitch.categorization?.privacy?.toLowerCase() === "public";
    const requesterId = req.user?.user?.id || req.user?.user?._id;
    const isOwner = requesterId && String(onlyPitch.createdBy) === String(requesterId);
    console.log(isOwner)

    if (!isPublic && !isOwner) {
        return res.status(403).json({ message: "This pitch is private" });
    }

    res.status(200).json({ data: onlyPitch });
});

// @desc    Delete pitch
// @route   DELETE /api/pitches/:id
const delete_only_pitch = async_handler(async (req, res) => {
    if (!req.user) return res.status(401).json({ message: "Authentication required" });

    const pitchToDelete = await pitch.findById(req.params.id);
    if (!pitchToDelete) return res.status(404).json({ message: "Pitch not found" });

    const requesterId = req.user?.user?.id || req.user?.user?._id;
    if (String(pitchToDelete.createdBy) !== String(requesterId)) {
        return res.status(403).json({ message: "Not authorized to delete this" });
    }

    await pitch.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Pitch successfully removed" });
});

module.exports = { 
    pitch_reg, 
    updatepitch, 
    get_all_pitches, 
    get_only_pitch, 
    delete_only_pitch 
};