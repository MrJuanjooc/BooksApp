const jwt = require("jsonwebtoken"),
  config = require("../configs/config"),
  userRegisterService = require("../services/userRegisterService"),
  userRegisterModel = require("../models/userRegisterModel");

exports.authentication = async (username, pass) => {
  const user = await userRegisterService.getUserByUsername(username);
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
  const userExist = await userRegisterService.getUserByUsername(username);

  if (userExist) {
    throw new Error("El usuario ya Existe");
  }
  return await userRegisterService.createUser(user);
};

exports.valideToken = (token) => {
  const decodedToken = jwt.verify(token, config.SECRET);
  return decodedToken;
};
