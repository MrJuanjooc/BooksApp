const userModel = require("../models/userModel");

exports.getUsers = async (user) => {
  if (user.query.username) {
    return await userModel
      .findOne({ username: userModel.query.username })
      .populate("Book", "nombre", "descripcion", "autor", "imagen");
  }
  return await userModel.find();
};

exports.findUser = async (idUser) => {
  return await userModel
    .findById(idUser)
    .populate("Book", "nombre", "descripcion", "autor", "imagen");
};

exports.updateUser = async (idUser, data) => {
  return await userModel.findByIdAndUpdate(idUser, data, {
    new: true,
  });
};

exports.deleteUser = async (idUser) => {
  return await userModel.findByIdAndDelete(idUser);
};

exports.createUser = async (user) => {
  return await userModel.create(user);
};
