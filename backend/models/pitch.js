const mongoose = require("mongoose");

const pitchSchema = new mongoose.Schema({
  pitchTitle: {
    type: String,
    required: true,
    trim: true
  },
  tagline: {
    type: String,
    required: true,
    trim: true
  },
  fullDescription: {
    type: String,
    required: true
  },
  teamDetails: {
    lookingForMembers: {
      type: Boolean,
      default: false
    },
    rolesRequired: [{
      type: String,
      enum: [
        "Backend Developer",
        "Frontend Developer",
        "UI/UX Designer",
        "Marketing Specialist",
        "Business Analyst",
        "Product Manager",
        "Data Scientist",
        "Sales Executive"
      ]
    }]
  },
  media: {
    image: {
      type: String // store image URL or file path
    },
    pitchDeck: {
      type: String // store file path or cloud URL
    },
    videoLink: {
      type: String
    }
  },
  categorization: {
    category: [{
      type: String,
      enum: ["AI", "EdTech", "Green Energy", "Healthcare", "FinTech"]
    }],
    privacy: {
      type: String,
      enum: ["Public", "Private"],
      default: "Public"
    },
    tags: [{
      type: String
    }]
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Pitch", pitchSchema);
