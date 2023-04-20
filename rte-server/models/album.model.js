const mongoose = require("mongoose");
const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    artist: {
      type: String,
    },

    image: {
      type: String,
      url: String,
    },

    tracklists: {
      type: [{ type: String, minlength: 3, maxlength: 255 }],
      required:true
    },
    desc: {
      type: String,
      max: 500,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Album", albumSchema);
