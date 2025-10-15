const async_handler = require("express-async-handler");
const Review = require("../models/reviews");  // Capitalized model name

const createReview = async_handler(async (req, res) => {
  const { likes, comments } = req.body;
  const newReview = new Review({ likes, comments });
  await newReview.save();

  return res.status(201).json({
    message: "new review created"
  });
});

module.exports = createReview;
