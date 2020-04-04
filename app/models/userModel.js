const mongoose = require("mongoose");

let userScheme = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
});

mongoose.model("User", userScheme);
module.exports = mongoose.model("User");
