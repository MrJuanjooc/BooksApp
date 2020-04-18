const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcryptjs");

let userScheme = new mongoose.Schema({
  username: {
    type: String,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  favoritos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

userScheme.methods.toJSON = function () {
  //trae los objetos de mongoose y los convierte a .json
  let user = this.toObject();
  delete user.password;
  return user;
};

//dispara un trigger antes de guardar
userScheme.methods.comparePassword = async function (password) {
  let result = await bcrypt.compare(password, this.password);
  return result;
};

//dispara un trigger antes de guardar
userScheme.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt); //Cifrar el password
  user.password = hashedPassword;
  return next();
});

mongoose.model("User", userScheme);
module.exports = mongoose.model("User");
