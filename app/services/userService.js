const userModel = require("../models/userModel");

exports.getUsers = async user => {
//  if (user.query.username) {
//    return await userModel.findOne({ username: userModel.query.username });
//  }
  return await userModel.find();
};

exports.createUser = async idUser => {
  return await userModel.create(idUser);
};

exports.deleteUser = async idUser => {
  return await userModel.findByIdAndDelete(idUser);
};

exports.findUser = async idUser => {
  return await userModel
  .findById(idUser)
};

exports.updateUser = async (idUser, data) => {
  return await userModel.findByIdUpdate(idUser, data, {
    new: true
  });
};
