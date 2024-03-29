const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    // unique: [true, "email already in use"]
  },
  age: {
    type: Number,
    // required: true
  }
});

module.exports = mongoose.model("User", userSchema)