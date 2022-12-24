const mongoose = require("mongoose");

// Create a Post Schema
const postSchema = mongoose.Schema(
  {
    titre: {
      // String, required, unique
      type: String,
      required: true,
      unique: true,
    },
    auteur: {
      // Strign, default: "unkown"
        type: String,
        default: "unkown",
    },
    resume: {
      // String, required, maxlength: 100
        type: String,
        required: true,
        maxlength: 100,
    },

    content: {
      // String, required, minlength: 100
        type: String,
        required: true,
        minlength: 100,
    },
  },
  { timestamps: true }
);

//create and export a Post Model
module.exports = mongoose.model("Post", postSchema);