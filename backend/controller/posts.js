const async_handler = require("express-async-handler");
const posts = require("../models/post");
const pitch = require("../models/pitch");

const createPost = async_handler(async (req, res) => {
    const { title, description, pitchid } = req.body;
    const newpost = await new posts({
        media: {
            video: req.files?.image ? `/media/${Date.now() + req.files.image[0].filename}` : null,
            photo: req.files?.pitchDeck ? `media/${Date.now() + req.files.pitchDeck[0].filename}` : null,
        },
        title, description, pitchid, createdBy: req.user?.user?.id || req.user?.user?._id
    });

    const newpostobj = await newpost.save();
    console.log(newpostobj);

    return res.status(201).json({
        message: newpostobj
    })
});

const updatepost = async_handler(async (req, res) => {

    const post = await posts.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Event not found" });
    const user = req.user?.user?.id || req.user?.user?._id;
    if (String(post.createdBy) !== String(user)) {
        return res.status(403).json({ "message": "unauthorized user" });
    }

    const updates = req.body;
    Object.assign(post, updates);
    await post.save();

    res.status(200).json({ message: "Post updated", post });

});

const getallPosts = async_handler(async (req, res) => {
    const user = req.user?.user?.id || req.user?.user?._id
    const allPosts = await posts.find({ createdBy: user });
    console.log(allPosts);
    res.status(200).json({ "message": allPosts });
});

const getonlyPost = async_handler(async (req, res) => {
    // 1. Fetch post and populate the categorization from the linked Pitch
    const onlyPost = await posts.findById(req.params.id).populate({
        path: "pitchid",
        select: "categorization"
    });

    if (!onlyPost) return res.status(404).json({ message: "Post not found" });

    // 2. Extract privacy safely (handling potential null pitchid)
    const privacyStatus = onlyPost.pitchid?.categorization?.privacy?.toLowerCase();
    const isPublic = privacyStatus === "public";

    // 3. Ownership check
    const requesterId = req.user?.user?.id || req.user?.user?._id;
    const isOwner = requesterId && String(onlyPost.createdBy) === String(requesterId);

    // 4. Access Control Logic
    if (!isPublic && !isOwner) {
        return res.status(403).json({ message: "This post is private" });
    }

    res.status(200).json({ data: onlyPost });
});


const deletePost = async_handler(async (req, res) => {
    // 1. Authenticated user check (from your jwttoken.js middleware)
    if (!req.user) return res.status(401).json({ message: "Authentication required" });

    // 2. Find the post first to verify ownership
    const postToDelete = await posts.findById(req.params.id);

    if (!postToDelete) {
        return res.status(404).json({ message: "Post not found" });
    }

    // 3. Authorization: Check if the requester is the one who created it
    const requesterId = req.user?.user?.id || req.user?.user?._id;
    if (String(postToDelete.createdBy) !== String(requesterId)) {
        return res.status(403).json({ message: "Not authorized to delete this post" });
    }

    // 4. Perform the deletion
    await posts.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: "Post deleted successfully" });
});

module.exports = { createPost, updatepost, getallPosts, getonlyPost, deletePost };