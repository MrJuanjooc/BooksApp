const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcryptjs");

const userRegisterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userRegisterSchema.methods.toJSON = function () {
  let user = this.toObject();
  delete user.password;
  return user;
};

userRegisterSchema.methods.comparePassword = async function (password) {
  let result = await bcrypt.compare(password, this.password);
  return result;
};

userRegisterSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  return next();
});

mongoose.model("userRegister", userRegisterSchema);
module.exports = mongoose.model("userRegister");
