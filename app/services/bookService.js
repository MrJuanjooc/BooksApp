const bookModel = require("../models/bookModel"),
  userModel = require("../models/userModel");

exports.getBooks = async (value) => {
  let books = await bookModel.find({
    $or: [
      { nombre: new RegExp(value, "si") }, //Realiza la busqueda por el nombre del libreo teniendo en cuenta el parametro ingresado en la ruta
      { autor: new RegExp(value, "si") },
      { categorias: new RegExp(value, "si") },
    ],
  });
  return books;
};

exports.createBook = async (idBook) => {
  return await bookModel.create(idBook);
};

exports.deleteBook = async (idBook) => {
  return await bookModel.findByIdAndDelete(idBook);
};

exports.findBook = async (idBook) => {
  return await bookModel.findById(idBook);
};

exports.updateBook = async (idBook, data) => {
  return await bookModel.findByIdAndUpdate(idBook, data, {
    new: true,
  });
};

exports.addFavorite = async (idBook, idUser) => {
  let addResult = await userModel.update(
    { _id: idUser },
    { $addToSet: { favoritos: idBook } }
  );

  return await userModel.findById(idUser).populate({
    path: "favoritos",
    select: "nombre descripcion autor imagen categorias",
  });
};

exports.rmFavorite = async (idBook, idUser) => {
  let rmResult = await userModel.update(
    { _id: idUser },
    { $pull: { favoritos: idBook } }
  );

  return await userModel.findById(idUser).populate({
    path: "favoritos",
    select: "nombre descripcion autor imagen categorias",
  });
};
