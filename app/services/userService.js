const userModel = require("../models/userModel"),
  bookModel = require("../models/bookModel"),
  reqFieldException = require("../exceptions/reqFieldException");

exports.getUSerByUsername = async (username) => {
  return await userModel.findOne({
    username: username,
  });
};

exports.getUsers = async () => {
  return await userModel.find().populate({
    path: "favoritos",
    select: "nombre descripcion autor imagen categorias",
  });
};

exports.findUser = async (idUser) => {
  return await userModel.findById(idUser).populate({
    path: "favoritos",
    select: "nombre descripcion autor imagen categorias",
  });
};

exports.updateUser = async (idUser, data) => {
  let updateResult = await userModel.updateOne({ _id: idUser }, { $set: data });

  return await userModel.findById(idUser).populate({
    path: "favoritos",
    select: "nombre descripcion autor imagen categorias",
  });
};

exports.deleteUser = async (idUser) => {
  return await userModel.findByIdAndDelete(idUser).populate({
    path: "favoritos",
    select: "nombre descripcion autor imagen categorias",
  });
};

exports.createUser = async (usr) => {
  if (!usr) {
    throw new reqFieldException("User");
  }
  let user = await userModel.create(usr);

  return user;
};
