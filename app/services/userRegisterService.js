const userRegisterModel = require("../models/userRegisterModel");

exports.getUserByUsername = async (username) => {
  return await userRegisterModel.findOne({ username: username });
};

exports.createUser = async (user) => {
  return await userRegisterModel.create(user);
};
