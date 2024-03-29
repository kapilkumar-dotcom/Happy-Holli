const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  imageurl: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("User", userSchema);
