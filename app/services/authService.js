const jwt = require("jsonwebtoken"),
  config = require("../configs/config"),
  userService = require("../services/userService"),
  userModel = require("../models/userModel");

exports.authentication = async (username, password) => {
  const user = await userService.getUSerByUsername(username);
  if (!user) {
    throw new Error("Id de usuario no encontrado");
  }

  const Result = await user.comparePassword(password);
  console.log(Result);

  if (!Result) {
    throw new Error("Password Invalido");
  }

  const token = jwt.sign({ username: username._id }, config.SECRET, {
    expiresIn: 10000,
  });

  return token;
};

exports.signUp = async (user) => {
  const username = user.username,
  userExist = await userService.getUSerByUsername(username);

  if (userExist) {
    throw new Error("El username ya existe");
  }
  return await userService.createUser(user);
};

exports.valideToken = (token) => {
  const decodedToken = jwt.verify(token, config.SECRET);
  return decodedToken;
};
