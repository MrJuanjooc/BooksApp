const userModel = require("../models/userModel");

exports.getUsers = async user => {
  if (user.query.username) {
    return await userModel.findOne({ username: userModel.query.username });
  }
};

exports.createUser = async idUser => {
  return await userModel.create(idUser);
};
