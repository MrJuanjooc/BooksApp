const jwt = require("jsonwebtoken"),
  config = require("../configs/config"),
  userService = require("../services/userService"),
  userModel = require("../models/userModel");

exports.authentication = async (username, pass) => {
  const user = await userService.getUSerByUsername(username);
  if (!user) {
    throw new Error("Usuario no Encontrado o no Existe");
  }

  const Result = await user.comparePassword(pass);
  console.log(Result);

  if (!Result) {
    throw new Error("Password Invalido");
  }

  const token = jwt.sign({ user: user._id }, config.SECRET, {
    expiresIn: 10000,
  });

  return token;
};

exports.signUp = async (user) => {
  const username = user.userName;
  const userExist = await userService.getUSerByUsername(username);

  if (userExist) {
    throw new Error("El usuario ya Existe");
  }
  return await userService.createUser(user);
};

exports.valideToken = (token) => {
  const decodedToken = jwt.verify(token, config.SECRET);
  return decodedToken;
};
