const bookModel = require("../models/bookModel");

exports.getBooks = async (book) => {
  //if (bookModel.query.nombre) {
  //  return await bookModel.findOne({
  //    nombre: bookModel.query.nombre,
  //  });
  //}
  return await bookModel.find();
};

exports.createBook = async (idBook) => {
  return await bookModel.create(idBook);
};
