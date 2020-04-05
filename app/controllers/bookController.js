const bookService = require("../services/bookService");

exports.getBooks = async (book, res) => {
  try {
    getResult = await bookService.getBooks(book);
    res.status(200).send(getResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createBook = async (req, res) => {
  try {
    const idBook = req.body;
    postResult = await bookService.createBook(idBook);
    res.status(200).send(postResult);
  } catch (err) {
    res.status(500).send(err);
  }
};
