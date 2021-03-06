const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: String,
  points: {
    type: Number,
    default: 0,
  },
  // students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  students: [{}],
  opposingSchool: [{}],
});

module.exports = mongoose.model("School", schoolSchema);
