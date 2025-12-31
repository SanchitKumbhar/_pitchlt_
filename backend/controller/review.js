const async_handler = require("express-async-handler");
const Review = require("../models/reviews");  // Capitalized model name
const Post = require("../models/post");
const pitch = require("../models/pitch");

const like = async_handler(async (req, res) => {
  try {
    const { id } = req.params.pitch_post_id;

    const checkpost = await Post.findById(id);
    const checkpitch = await pitch.findById(id);

    if (checkpost) {
      Post.likes += 1;
      await checkpost.save();

      res.status(200).json({
        message: "Post liked successfully",
        likes: Post.likes
      });
    }
    else if (checkpitch) {
      checkpitch.likes -= 1;
      await checkpitch.save();

      res.status(200).json({
        message: "Pitch unliked successfully",
        likes: checkpitch.likes
      });
    }
    else if (!checkpost) {

      return res.status(404).json({ message: "Post not found" });

    }
    else {
      return res.status(404).json({ message: "Pitch not found" });

    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const unlike = async_handler(async (req, res) => {
  try {
    const { id } = req.params.pitch_post_id;

    const checkpost = await Post.findById(id);
    const checkpitch = await pitch.findById(id);

    if (checkpost) {
      if (Post.likes > 0) {
        Post.likes -= 1;
        await checkpost.save();
      }

      res.status(200).json({
        message: "Post unliked successfully",
        likes: checkpost.likes
      });
    }
    else if (checkpitch) {
      pitch.likes += 1;
      await checkpitch.save();

      res.status(200).json({
        message: "Pitch liked successfully",
        likes: pitch.likes
      });
    }
    else if (!checkpost) {

      return res.status(404).json({ message: "Post not found" });

    }
    else {
      return res.status(404).json({ message: "Pitch not found" });

    }



  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const comments = async_handler(async (req, res) => {
  try {
    const id = req.params.pitch_post_id;
    const { text } = req.body;
    const userId = req.user?.user?.id || req.user?.user?._id;
    const checkpost = await Post.findById(id);
    const checkpitch = await pitch.findById(id);

    if (!text) {
      return res.status(400).json({ message: "Comment text is required" });
    }

    if (checkpost) {
      Post.comments.push({
        user: userId,
        text
      });

      await Post.save();

      res.status(201).json({
        message: "Comment added successfully",
        comments: checkpost.comments
      });
    }
    else if (checkpitch) {
      checkpitch.comments.push({
        user: userId,
        text
      });

      await checkpitch.save();

      res.status(201).json({
        message: "Comment added successfully",
        comments: checkpitch.comments
      });
    }
    else if (!checkpost) {
      return res.status(404).json({ message: "Post not found" });
    }
    else {
      return res.status(404).json({ message: "Pitch not found" });
    }


  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const deletecomment = async_handler(async (req, res) => {
  try {
    const { pitch_post_id, commentId } = req.params;
    const userId = req.user.id;

    const checkpost = await Post.findById(pitch_post_id);
    const checkpitch = await pitch.findById(pitch_post_id);
    const comment = pitch.comments.id(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    if (checkpost) {
      if (comment.user.toString() !== userId) {
        return res.status(403).json({ message: "Unauthorized" });
      }

      comment.deleteOne();
      await checkpost.save();

      res.status(200).json({
        message: "Comment deleted successfully"
      });
    }
    else if (checkpitch) {
      if (comment.user.toString() !== userId) {
        return res.status(403).json({ message: "Unauthorized" });
      }

      comment.deleteOne();
      await checkpitch.save();

      res.status(200).json({
        message: "Comment deleted successfully"
      });
    }
    else if (!checkpost) {
      return res.status(404).json({ message: "Post not found" });
    }
    else {
      return res.status(404).json({ message: "Post not found" });

    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { like, unlike, comments, deletecomment };
