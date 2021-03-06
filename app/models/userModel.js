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

userScheme.pre("updateOne", async function (next){
  if (this._update.$set.password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this._update.$set.password, salt);

    this._update.$set.password = hashedPassword;
  }
  // let updatepass = this._update.$set.password;
  // if (updatepass) {
  //   const salt = await bcrypt.genSalt(10);
  //   const hashedPassword = await bcrypt.hash(updatepass, salt);

  //   updatepass = hashedPassword;
  // }
  // return next();
});

mongoose.model("User", userScheme);
module.exports = mongoose.model("User");

/*

{
	"username": 		"alejo",
	"name":			"Ajelandro Cardona",
	"password":		"123456",
	"favoritos":	"5e8a5ded6a87462dcc497515"
}

{
	"username": 		"juanjooc",
	"name":			"Juan Jose Ocampo Castaño",
	"password":		"123456",
	"favoritos":	"5e8a5ded6a87462dcc497515"
}


*/
