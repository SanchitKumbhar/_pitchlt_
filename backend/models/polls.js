const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  options: [
    {
      text: {
        type: String,
        required: true
      },
      votedBy: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ]
    }
  ],
  pitchid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pitch",
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Poll", pollSchema);
